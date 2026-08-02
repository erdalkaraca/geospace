import{o as e,t}from"./rolldown-runtime-C0FnF6B9.js";import{l as n,m as r,n as i}from"./fs-access-D-fDaJ8V-CsJvJRH4.js";import{n as a,t as o}from"./events-B_ZxkU_G-Csyv_OtD.js";import{F as s,V as c,X as l,g as u,h as d,i as f,v as p}from"./repeat-CUOIy3cL.js";import{F as m,R as h,T as g,a as _,n as v,o as y,x as b}from"./dist-8hKpvNa5.js";import"./lit-CtVJFi4_.js";import{t as x}from"./third-party-nJcx05eu.js";var S=`dataview/publish`,C=`dataview/added`,w;function T(e){return e==null?``:String(e)}function E(e,t){return e.length!==0&&e.every(e=>{let n=e[t];if(n==null)return!0;let r=Number(n);return Number.isFinite(r)})}function D(e,t,n){if(n){let n=Number(e),r=Number(t);return Number.isFinite(n)?Number.isFinite(r)?n-r:-1:+!!Number.isFinite(r)}return T(e).localeCompare(T(t),void 0,{numeric:!0})}var O=class extends s{static{w=this}constructor(...e){super(...e),this.data={columns:[],rows:[]},this.emptyMessage=`No data.`,this.sortColumnIndex=null,this.sortDirection=`asc`,this.filterQuery=``,this.pageSize=25,this.currentPage=0}static{this.PAGE_SIZE_OPTIONS=[10,25,50,100]}get columns(){return Array.isArray(this.data?.columns)?this.data.columns:[]}get rows(){return Array.isArray(this.data?.rows)?this.data.rows:[]}get filteredRows(){let e=this.filterQuery.trim().toLowerCase();return e?this.rows.filter(t=>t.some(t=>T(t).toLowerCase().includes(e))):this.rows}get sortedRows(){let e=this.filteredRows;if(this.sortColumnIndex==null||this.sortColumnIndex<0)return e;let t=this.sortColumnIndex,n=E(e,t),r=this.sortDirection===`asc`?1:-1;return[...e].sort((e,i)=>{let a=e[t],o=i[t];return r*D(a,o,n)})}get totalRows(){return this.sortedRows.length}get pageCount(){let e=this.totalRows;return e===0?1:Math.ceil(e/this.pageSize)}get pagedRows(){let e=this.sortedRows,t=this.clampedPage*this.pageSize;return e.slice(t,t+this.pageSize)}get clampedPage(){let e=this.pageCount;return e<=0?0:Math.min(this.currentPage,e-1)}goToPage(e){let t=Math.max(0,this.pageCount-1);this.currentPage=Math.max(0,Math.min(e,t)),this.requestUpdate()}onPageSizeChange(e){let t=e.target.value,n=parseInt(t,10);!Number.isFinite(n)||n<1||(this.pageSize=n,this.currentPage=0,this.requestUpdate())}onSort(e){this.sortColumnIndex===e?this.sortDirection=this.sortDirection===`asc`?`desc`:`asc`:(this.sortColumnIndex=e,this.sortDirection=`asc`),this.requestUpdate()}onFilterInput(e){this.filterQuery=e.target.value,this.requestUpdate()}clearFilter(){this.filterQuery=``,this.requestUpdate()}getSortAria(e){return this.sortColumnIndex===e?this.sortDirection===`asc`?`ascending`:`descending`:`none`}render(){let{columns:e}=this,t=this.totalRows,n=this.pagedRows,r=this.clampedPage,i=this.pageCount,a=t===0?0:r*this.pageSize+1,o=Math.min((r+1)*this.pageSize,t);return e.length===0&&t===0&&this.rows.length===0?c`<div class="table-empty">${this.emptyMessage}</div>`:c`
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
            ${w.PAGE_SIZE_OPTIONS.map(e=>c`<wa-option value=${String(e)}>${e}</wa-option>`)}
          </wa-select>
          <span class="paging-summary" aria-live="polite">
            ${t===0?`0 rows`:`${a}–${o} of ${t}`}
          </span>
          <wa-button
            size="small"
            appearance="plain"
            title="Previous page"
            ?disabled=${i<=1||r<=0}
            @click=${()=>this.goToPage(r-1)}
          >
            <wa-icon name="chevron-left" label="Previous"></wa-icon>
          </wa-button>
          <wa-button
            size="small"
            appearance="plain"
            title="Next page"
            ?disabled=${i<=1||r>=i-1}
            @click=${()=>this.goToPage(r+1)}
          >
            <wa-icon name="chevron-right" label="Next"></wa-icon>
          </wa-button>
        </div>
      </div>
      <div class="table-wrap">
        <table class="result-table">
          <thead>
            <tr>
              ${e.map((e,t)=>c`
                  <th scope="col" role="columnheader" aria-sort=${this.getSortAria(t)}>
                    <button
                      type="button"
                      class="th-sort"
                      @click=${()=>this.onSort(t)}
                      title="Sort by ${e}"
                    >
                      <span class="th-label">${e}</span>
                      ${this.sortColumnIndex===t?c`<wa-icon
                            name=${this.sortDirection===`asc`?`arrow-up`:`arrow-down`}
                            label=${this.sortDirection}
                          ></wa-icon>`:c`<wa-icon name="arrows-up-down" label="Sort"></wa-icon>`}
                    </button>
                  </th>
                `)}
            </tr>
          </thead>
          <tbody>
            ${n.length===0?c`<tr><td colspan=${e.length} class="table-empty-cell">No matching rows.</td></tr>`:n.map(e=>c`
                    <tr>
                      ${e.map(e=>c`<td>${T(e)}</td>`)}
                    </tr>
                  `)}
          </tbody>
        </table>
      </div>
    `}static{this.styles=l`
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
  `}};g([u({attribute:!1})],O.prototype,`data`,void 0),g([u({type:String})],O.prototype,`emptyMessage`,void 0),g([d()],O.prototype,`sortColumnIndex`,void 0),g([d()],O.prototype,`sortDirection`,void 0),g([d()],O.prototype,`filterQuery`,void 0),g([d()],O.prototype,`pageSize`,void 0),g([d()],O.prototype,`currentPage`,void 0),O=w=g([p(`docks-data-table`)],O);var k=e(t(((e,t)=>{((n,r)=>{typeof define==`function`&&define.amd?define([],r):typeof t==`object`&&e!==void 0?t.exports=r():n.Papa=r()})(e,function e(){var t=typeof self<`u`?self:typeof window<`u`?window:t===void 0?{}:t,n,r=!t.document&&!!t.postMessage,i=t.IS_PAPA_WORKER||!1,a={},o=0,s={};function c(e){return e.charCodeAt(0)===65279?e.slice(1):e}function l(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine=``,this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var t=b(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null),this._handle=new m(t),(this._handle.streamer=this)._config=t}.call(this,e),this.parseChunk=function(e,n){var r=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<r){let t=this._config.newline;t||=(a=this._config.quoteChar||`"`,this._handle.guessLineEndings(e,a)),e=[...e.split(t).slice(r)].join(t)}this.isFirstChunk&&S(this._config.beforeFirstChunk)&&(a=this._config.beforeFirstChunk(e))!==void 0&&(e=a),this.isFirstChunk=!1,this._halted=!1;var r=this._partialLine+e,a=(this._partialLine=``,this._handle.parse(r,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(e=a.meta.cursor,r=(this._finished||(this._partialLine=r.substring(e-this._baseIndex),this._baseIndex=e),a&&a.data&&(this._rowCount+=a.data.length),this._finished||this._config.preview&&this._rowCount>=this._config.preview),i)t.postMessage({results:a,workerId:s.WORKER_ID,finished:r});else if(S(this._config.chunk)&&!n){if(this._config.chunk(a,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=a=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(a.data),this._completeResults.errors=this._completeResults.errors.concat(a.errors),this._completeResults.meta=a.meta),this._completed||!r||!S(this._config.complete)||a&&a.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),r||a&&a.meta.paused||this._nextChunk(),a}this._halted=!0},this._sendError=function(e){S(this._config.error)?this._config.error(e):i&&this._config.error&&t.postMessage({workerId:s.WORKER_ID,error:e,finished:!1})}}function u(e){var t;(e||={}).chunkSize||(e.chunkSize=s.RemoteChunkSize),l.call(this,e),this._nextChunk=r?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(t=new XMLHttpRequest,this._config.withCredentials&&(t.withCredentials=this._config.withCredentials),r||(t.onload=x(this._chunkLoaded,this),t.onerror=x(this._chunkError,this)),t.open(this._config.downloadRequestBody?`POST`:`GET`,this._input,!r),this._config.downloadRequestHeaders){var e,n=this._config.downloadRequestHeaders;for(e in n)t.setRequestHeader(e,n[e])}var i;this._config.chunkSize&&(i=this._start+this._config.chunkSize-1,t.setRequestHeader(`Range`,`bytes=`+this._start+`-`+i));try{t.send(this._config.downloadRequestBody)}catch(e){this._chunkError(e.message)}r&&t.status===0&&this._chunkError()}},this._chunkLoaded=function(){t.readyState===4&&(t.status<200||400<=t.status?this._chunkError():(this._start+=this._config.chunkSize||t.responseText.length,this._finished=!this._config.chunkSize||this._start>=(e=>(e=e.getResponseHeader(`Content-Range`))===null?-1:parseInt(e.substring(e.lastIndexOf(`/`)+1)))(t),this.parseChunk(t.responseText)))},this._chunkError=function(e){e=t.statusText||e,this._sendError(Error(e))}}function d(e){(e||={}).chunkSize||(e.chunkSize=s.LocalChunkSize),l.call(this,e);var t,n,r=typeof FileReader<`u`;this.stream=function(e){this._input=e,n=e.slice||e.webkitSlice||e.mozSlice,r?((t=new FileReader).onload=x(this._chunkLoaded,this),t.onerror=x(this._chunkError,this)):t=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input,i=(this._config.chunkSize&&(i=Math.min(this._start+this._config.chunkSize,this._input.size),e=n.call(e,this._start,i)),t.readAsText(e,this._config.encoding));r||this._chunkLoaded({target:{result:i}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(t.error)}}function f(e){var t;l.call(this,e||={}),this.stream=function(e){return t=e,this._nextChunk()},this._nextChunk=function(){var e,n;if(!this._finished)return e=this._config.chunkSize,t=e?(n=t.substring(0,e),t.substring(e)):(n=t,``),this._finished=!t,this.parseChunk(n)}}function p(e){l.call(this,e||={});var t=[],n=!0,r=!1;this.pause=function(){l.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){l.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on(`data`,this._streamData),this._input.on(`end`,this._streamEnd),this._input.on(`error`,this._streamError)},this._checkIsFinished=function(){r&&t.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):n=!0},this._streamData=x(function(e){try{t.push(typeof e==`string`?e:e.toString(this._config.encoding)),n&&(n=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}},this),this._streamError=x(function(e){this._streamCleanUp(),this._sendError(e)},this),this._streamEnd=x(function(){this._streamCleanUp(),r=!0,this._streamData(``)},this),this._streamCleanUp=x(function(){this._input.removeListener(`data`,this._streamData),this._input.removeListener(`end`,this._streamEnd),this._input.removeListener(`error`,this._streamError)},this)}function m(e){var t,n,r,i,a=2**53,o=-a,l=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,u=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,d=this,f=0,p=0,m=!1,_=!1,v=[],y={data:[],errors:[],meta:{}};function x(t){return e.skipEmptyLines===`greedy`?t.join(``).trim()===``:t.length===1&&t[0].length===0}function C(){if(y&&r&&(T(`Delimiter`,`UndetectableDelimiter`,`Unable to auto-detect delimiting character; defaulted to '`+s.DefaultDelimiter+`'`),r=!1),e.skipEmptyLines&&(y.data=y.data.filter(function(e){return!x(e)})),w()){if(y)if(Array.isArray(y.data[0])){for(var t=0;w()&&t<y.data.length;t++)y.data[t].forEach(n);y.data.splice(0,1)}else y.data.forEach(n);function n(t,n){t=c(t),S(e.transformHeader)&&(t=e.transformHeader(t,n)),v.push(t)}}function n(t,n){for(var r=e.header?{}:[],i=0;i<t.length;i++){var s=i,c=t[i],c=((t,n)=>(t=>(e.dynamicTypingFunction&&e.dynamicTyping[t]===void 0&&(e.dynamicTyping[t]=e.dynamicTypingFunction(t)),!0===(e.dynamicTyping[t]||e.dynamicTyping)))(t)?n===`true`||n===`TRUE`||n!==`false`&&n!==`FALSE`&&((e=>{if(l.test(e)&&(e=parseFloat(e),o<e&&e<a))return 1})(n)?parseFloat(n):u.test(n)?new Date(n):n===``?null:n):n)(s=e.header?i>=v.length?`__parsed_extra`:v[i]:s,c=e.transform?e.transform(c,s):c);s===`__parsed_extra`?(r[s]=r[s]||[],r[s].push(c)):r[s]=c}return e.header&&(i>v.length?T(`FieldMismatch`,`TooManyFields`,`Too many fields: expected `+v.length+` fields but parsed `+i,p+n):i<v.length&&T(`FieldMismatch`,`TooFewFields`,`Too few fields: expected `+v.length+` fields but parsed `+i,p+n)),r}var i;y&&(e.header||e.dynamicTyping||e.transform)&&(i=1,!y.data.length||Array.isArray(y.data[0])?(y.data=y.data.map(n),i=y.data.length):y.data=n(y.data,0),e.header&&y.meta&&(y.meta.fields=v),p+=i)}function w(){return e.header&&v.length===0}function T(e,t,n,r){e={type:e,code:t,message:n},r!==void 0&&(e.row=r),y.errors.push(e)}S(e.step)&&(i=e.step,e.step=function(t){y=t,w()?C():(C(),y.data.length!==0&&(f+=t.data.length,e.preview&&f>e.preview?n.abort():(y.data=y.data[0],i(y,d))))}),this.parse=function(i,a,o){var c=e.quoteChar||`"`,c=(e.newline||=this.guessLineEndings(i,c),r=!1,e.delimiter?S(e.delimiter)&&(e.delimiter=e.delimiter(i),y.meta.delimiter=e.delimiter):((c=((t,n,r,i,a)=>{var o,c,l,u;a||=[`,`,`	`,`|`,`;`,s.RECORD_SEP,s.UNIT_SEP];for(var d=0;d<a.length;d++){for(var f,p=a[d],m=0,h=0,_=0,v=(l=void 0,new g({comments:i,delimiter:p,newline:n,preview:10}).parse(t)),y=0;y<v.data.length;y++)r&&x(v.data[y])?_++:(f=v.data[y].length,h+=f,l===void 0?l=f:0<f&&(m+=Math.abs(f-l),l=f));0<v.data.length&&(h/=v.data.length-_),(c===void 0||m<=c)&&(u===void 0||u<h)&&1.99<h&&(c=m,o=p,u=h)}return{successful:!!(e.delimiter=o),bestDelimiter:o}})(i,e.newline,e.skipEmptyLines,e.comments,e.delimitersToGuess)).successful?e.delimiter=c.bestDelimiter:(r=!0,e.delimiter=s.DefaultDelimiter),y.meta.delimiter=e.delimiter),b(e));return e.preview&&e.header&&c.preview++,t=i,n=new g(c),y=n.parse(t,a,o),C(),m?{meta:{paused:!0}}:y||{meta:{paused:!1}}},this.paused=function(){return m},this.pause=function(){m=!0,n.abort(),t=S(e.chunk)?``:t.substring(n.getCharIndex())},this.resume=function(){d.streamer._halted?(m=!1,d.streamer.parseChunk(t,!0)):setTimeout(d.resume,3)},this.aborted=function(){return _},this.abort=function(){_=!0,n.abort(),y.meta.aborted=!0,S(e.complete)&&e.complete(y),t=``},this.guessLineEndings=function(e,t){e=e.substring(0,1048576);var t=RegExp(h(t)+`([^]*?)`+h(t),`gm`),n=(e=e.replace(t,``)).split(`\r`),t=e.split(`
`),e=1<t.length&&t[0].length<n[0].length;if(n.length===1||e)return`
`;for(var r=0,i=0;i<n.length;i++)n[i][0]===`
`&&r++;return r>=n.length/2?`\r
`:`\r`}}function h(e){return e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)}function g(e){var t=(e||={}).delimiter,n=e.newline,r=e.comments,i=e.step,a=e.preview,o=e.fastMode,l=null,u=!1,d=e.quoteChar==null?`"`:e.quoteChar,f=d;if(e.escapeChar!==void 0&&(f=e.escapeChar),(typeof t!=`string`||-1<s.BAD_DELIMITERS.indexOf(t))&&(t=`,`),r===t)throw Error(`Comment character same as delimiter`);!0===r?r=`#`:(typeof r!=`string`||-1<s.BAD_DELIMITERS.indexOf(r))&&(r=!1),n!==`
`&&n!==`\r`&&n!==`\r
`&&(n=`
`);var p=0,m=!1;this.parse=function(s,g,_){if(typeof s!=`string`)throw Error(`Input must be a string`);var v=s.length,y=t.length,b=n.length,x=r.length,C=S(i),w=[],T=[],E=[],D=p=0;if(!s)return z();if(o||!1!==o&&s.indexOf(d)===-1){for(var O=s.split(n),k=0;k<O.length;k++){if(E=O[k],p+=E.length,k!==O.length-1)p+=n.length;else if(_)return z();if(!r||E.substring(0,x)!==r){if(C){if(w=[],F(E.split(t)),B(),m)return z()}else F(E.split(t));if(a&&a<=k)return w=w.slice(0,a),z(!0)}}return z()}for(var A=s.indexOf(t,p),j=s.indexOf(n,p),M=new RegExp(h(f)+h(d),`g`),N=s.indexOf(d,p);;)if(s[p]===d)for(N=p,p++;;){if((N=s.indexOf(d,N+1))===-1)return _||T.push({type:`Quotes`,code:`MissingQuotes`,message:`Quoted field unterminated`,row:w.length,index:p}),L();if(N===v-1)return L(s.substring(p,N).replace(M,d));if(d===f&&s[N+1]===f)N++;else if(d===f||N===0||s[N-1]!==f){A!==-1&&A<N+1&&(A=s.indexOf(t,N+1));var P=I((j=j!==-1&&j<N+1?s.indexOf(n,N+1):j)===-1?A:Math.min(A,j));if(s.substr(N+1+P,y)===t){E.push(s.substring(p,N).replace(M,d)),s[p=N+1+P+y]!==d&&(N=s.indexOf(d,p)),A=s.indexOf(t,p),j=s.indexOf(n,p);break}if(P=I(j),s.substring(N+1+P,N+1+P+b)===n){if(E.push(s.substring(p,N).replace(M,d)),R(N+1+P+b),A=s.indexOf(t,p),N=s.indexOf(d,p),C&&(B(),m))return z();if(a&&w.length>=a)return z(!0);break}T.push({type:`Quotes`,code:`InvalidQuotes`,message:`Trailing quote on quoted field is malformed`,row:w.length,index:p}),N++}}else if(r&&E.length===0&&s.substring(p,p+x)===r){if(j===-1)return z();p=j+b,j=s.indexOf(n,p),A=s.indexOf(t,p)}else if(A!==-1&&(A<j||j===-1))E.push(s.substring(p,A)),p=A+y,A=s.indexOf(t,p);else{if(j===-1)break;if(E.push(s.substring(p,j)),R(j+b),C&&(B(),m))return z();if(a&&w.length>=a)return z(!0)}return L();function F(e){w.push(e),D=p}function I(e){var t=0;return t=e!==-1&&(e=s.substring(N+1,e))&&e.trim()===``?e.length:t}function L(e){return _||(e===void 0&&(e=s.substring(p)),E.push(e),p=v,F(E),C&&B()),z()}function R(e){p=e,F(E),E=[],j=s.indexOf(n,p)}function z(r){if(e.header&&!g&&w.length&&!u){var i=w[0],a=Object.create(null),o=new Set(i);let t=!1;for(let n=0;n<i.length;n++){let r=c(i[n]);if(a[r=S(e.transformHeader)?e.transformHeader(r,n):r]){let e,s=a[r];for(;e=r+`_`+s,s++,o.has(e););o.add(e),i[n]=e,a[r]++,t=!0,(l=l===null?{}:l)[e]=r}else a[r]=1,i[n]=r;o.add(r)}t&&console.warn(`Duplicate headers found and renamed.`),u=!0}return{data:w,errors:T,meta:{delimiter:t,linebreak:n,aborted:m,truncated:!!r,cursor:D+(g||0),renamedHeaders:l}}}function B(){i(z()),w=[],T=[]}},this.abort=function(){m=!0},this.getCharIndex=function(){return p}}function _(e){var t=e.data,n=a[t.workerId],r=!1;if(t.error)n.userError(t.error,t.file);else if(t.results&&t.results.data){var i={abort:function(){r=!0,v(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:y,resume:y};if(S(n.userStep)){for(var o=0;o<t.results.data.length&&(n.userStep({data:t.results.data[o],errors:t.results.errors,meta:t.results.meta},i),!r);o++);delete t.results}else S(n.userChunk)&&(n.userChunk(t.results,i,t.file),delete t.results)}t.finished&&!r&&v(t.workerId,t.results)}function v(e,t){var n=a[e];S(n.userComplete)&&n.userComplete(t),n.terminate(),delete a[e]}function y(){throw Error(`Not implemented.`)}function b(e){if(typeof e!=`object`||!e)return e;var t,n=Array.isArray(e)?[]:{};for(t in e)n[t]=b(e[t]);return n}function x(e,t){return function(){e.apply(t,arguments)}}function S(e){return typeof e==`function`}return s.parse=function(n,r){var i=(r||={}).dynamicTyping||!1;if(S(i)&&(r.dynamicTypingFunction=i,i={}),r.dynamicTyping=i,r.transform=!!S(r.transform)&&r.transform,!r.worker||!s.WORKERS_SUPPORTED)return i=null,s.NODE_STREAM_INPUT,typeof n==`string`?(n=c(n),i=new(r.download?u:f)(r)):!0===n.readable&&S(n.read)&&S(n.on)?i=new p(r):(t.File&&n instanceof File||n instanceof Object)&&(i=new d(r)),i.stream(n);(i=(()=>{var n;return!!s.WORKERS_SUPPORTED&&(n=(()=>{var n=t.URL||t.webkitURL||null,r=e.toString();return s.BLOB_URL||=n.createObjectURL(new Blob([`var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; `,`(`,r,`)();`],{type:`text/javascript`}))})(),(n=new t.Worker(n)).onmessage=_,n.id=o++,a[n.id]=n)})()).userStep=r.step,i.userChunk=r.chunk,i.userComplete=r.complete,i.userError=r.error,r.step=S(r.step),r.chunk=S(r.chunk),r.complete=S(r.complete),r.error=S(r.error),delete r.worker,i.postMessage({input:n,config:r,workerId:i.id})},s.unparse=function(e,t){var n=!1,r=!0,i=`,`,a=`\r
`,o=`"`,c=o+o,l=!1,u=null,d=!1,f=((()=>{if(typeof t==`object`){if(typeof t.delimiter!=`string`||s.BAD_DELIMITERS.filter(function(e){return t.delimiter.indexOf(e)!==-1}).length||(i=t.delimiter),typeof t.quotes!=`boolean`&&typeof t.quotes!=`function`&&!Array.isArray(t.quotes)||(n=t.quotes),typeof t.skipEmptyLines!=`boolean`&&typeof t.skipEmptyLines!=`string`||(l=t.skipEmptyLines),typeof t.newline==`string`&&(a=t.newline),typeof t.quoteChar==`string`&&(o=t.quoteChar,c=o+o),typeof t.header==`boolean`&&(r=t.header),Array.isArray(t.columns)){if(t.columns.length===0)throw Error(`Option columns is empty`);u=t.columns}t.escapeChar!==void 0&&(c=t.escapeChar+o),t.escapeFormulae instanceof RegExp?d=t.escapeFormulae:typeof t.escapeFormulae==`boolean`&&t.escapeFormulae&&(d=/^[=+\-@\t\r].*$/)}})(),new RegExp(h(o),`g`));if(typeof e==`string`&&(e=JSON.parse(e)),Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return p(null,e,l);if(typeof e[0]==`object`)return p(u||Object.keys(e[0]),e,l)}else if(typeof e==`object`)return typeof e.data==`string`&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields||u),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:typeof e.data[0]==`object`?Object.keys(e.data[0]):[]),Array.isArray(e.data[0])||typeof e.data[0]==`object`||(e.data=[e.data])),p(e.fields||[],e.data||[],l);throw Error(`Unable to serialize unrecognized input`);function p(e,t,n){var o=``,s=(typeof e==`string`&&(e=JSON.parse(e)),typeof t==`string`&&(t=JSON.parse(t)),Array.isArray(e)&&0<e.length),c=!Array.isArray(t[0]);if(s&&r){for(var l=0;l<e.length;l++)0<l&&(o+=i),o+=m(e[l],l);0<t.length&&(o+=a)}for(var u=0;u<t.length;u++){var d=(s?e:t[u]).length,f=!1,p=s?Object.keys(t[u]).length===0:t[u].length===0;if(n&&!s&&(f=n===`greedy`?t[u].join(``).trim()===``:t[u].length===1&&t[u][0].length===0),n===`greedy`&&s){for(var h=[],g=0;g<d;g++){var _=c?e[g]:g;h.push(t[u][_])}f=h.join(``).trim()===``}if(!f){for(var v=0;v<d;v++){0<v&&!p&&(o+=i);var y=s&&c?e[v]:v;o+=m(t[u][y],v)}u<t.length-1&&(!n||0<d&&!p)&&(o+=a)}}return o}function m(e,t){var r,a,l;return e==null?``:e.constructor===Date?JSON.stringify(e).slice(1,25):(l=!1,d&&typeof e==`string`&&d.test(e)&&(e=`'`+e,l=!0),a=(r=e.toString()).replace(f,c),(l=l||!0===n||typeof n==`function`&&n(e,t)||Array.isArray(n)&&n[t]||((e,t)=>{for(var n=0;n<t.length;n++)if(-1<e.indexOf(t[n]))return!0;return!1})(a,s.BAD_DELIMITERS)||-1<a.indexOf(i)||-1<r.indexOf(o)||a.charAt(0)===` `||a.charAt(a.length-1)===` `)?o+a+o:a)}},s.RECORD_SEP=``,s.UNIT_SEP=``,s.BYTE_ORDER_MARK=`﻿`,s.BAD_DELIMITERS=[`\r`,`
`,`"`,s.BYTE_ORDER_MARK],s.WORKERS_SUPPORTED=!r&&!!t.Worker,s.NODE_STREAM_INPUT=1,s.LocalChunkSize=10485760,s.RemoteChunkSize=5242880,s.DefaultDelimiter=`,`,s.Parser=g,s.ParserHandle=m,s.NetworkStreamer=u,s.FileStreamer=d,s.StringStreamer=f,s.ReadableStreamStreamer=p,t.jQuery&&((n=t.jQuery).fn.parse=function(e){var r=e.config||{},i=[];return this.each(function(e){if(!(n(this).prop(`tagName`).toUpperCase()===`INPUT`&&n(this).attr(`type`).toLowerCase()===`file`&&t.FileReader)||!this.files||this.files.length===0)return!0;for(var a=0;a<this.files.length;a++)i.push({file:this.files[a],inputElem:this,instanceConfig:n.extend({},r)})}),a(),this;function a(){if(i.length===0)S(e.complete)&&e.complete();else{var t,r,a,c,l=i[0];if(S(e.before)){var u=e.before(l.file,l.inputElem);if(typeof u==`object`){if(u.action===`abort`)return t=`AbortError`,r=l.file,a=l.inputElem,c=u.reason,void(S(e.error)&&e.error({name:t},r,a,c));if(u.action===`skip`)return void o();typeof u.config==`object`&&(l.instanceConfig=n.extend(l.instanceConfig,u.config))}else if(u===`skip`)return void o()}var d=l.instanceConfig.complete;l.instanceConfig.complete=function(e){S(d)&&d(e,l.file,l.inputElem),o()},s.parse(l.file,l.instanceConfig)}}function o(){i.splice(0,1),a()}}),i&&(t.onmessage=function(e){e=e.data,s.WORKER_ID===void 0&&e&&(s.WORKER_ID=e.workerId),typeof e.input==`string`?t.postMessage({workerId:s.WORKER_ID,results:s.parse(e.input,e.config),finished:!0}):(t.File&&e.input instanceof File||e.input instanceof Object)&&(e=s.parse(e.input,e.config))&&t.postMessage({workerId:s.WORKER_ID,results:e,finished:!0})}),(u.prototype=Object.create(l.prototype)).constructor=u,(d.prototype=Object.create(l.prototype)).constructor=d,(f.prototype=Object.create(f.prototype)).constructor=f,(p.prototype=Object.create(l.prototype)).constructor=p,s})}))(),1),A=`dataview/`,j=A+`index`,M=new class{init(){this.subscriptionToken===void 0&&(this.subscriptionToken=a(S,e=>{this.handlePublish(e)}))}async handlePublish(e){let t=x(),r=Date.now(),i={id:e.id??t,title:e.title,data:e.data,source:e.source,createdAt:r};await n.persistObject(A+t,i);let a=await n.getObject(j),s=Array.isArray(a)?a:[];s.push({storageKey:t,title:e.title,source:e.source,createdAt:r}),await n.persistObject(j,s),o(C,{storageKey:t,title:e.title,createdAt:r})}async listViews(){let e=await n.getObject(j);return!Array.isArray(e)||e.length===0?[]:typeof e[0]==`string`?e.map(e=>({storageKey:e,title:e,createdAt:0})):[...e].sort((e,t)=>e.createdAt-t.createdAt)}async getView(e){return await n.getObject(A+e)??null}async deleteView(e){let t=await n.getObject(j),r=Array.isArray(t)?t.filter(t=>t.storageKey!==e):[];await n.persistObject(j,r),await n.persistObject(A+e,null)}async clearAllViews(){let e=await n.getObject(j),t=Array.isArray(e)?e:[];await Promise.all(t.map(e=>n.persistObject(A+e.storageKey,null))),await n.persistObject(j,[])}},N=class extends _{constructor(...e){super(...e),this.dataview=null,this.persistedList=[],this.selectedStorageKey=``,this.selectedView=null,this.loadingList=!0,this.autoActivateTab=!0}get displayed(){return this.selectedView??this.dataview}get hasData(){let e=this.displayed;if(!e)return!1;let{columns:t,rows:n}=e.data;return Array.isArray(t)&&Array.isArray(n)&&(t.length>0||n.length>0)}toCsv(e){let{columns:t,rows:n}=e.data,r=e=>{if(e==null)return``;let t=String(e);return/[",\n]/.test(t)?`"${t.replace(/"/g,`""`)}"`:t},i=t.map(r).join(`,`),a=n.map(e=>e.map(r).join(`,`)).join(`
`);return a?`${i}\n${a}`:i}async onExportCsv(){let e=this.displayed;if(!(!e||!this.hasData))try{let t=this.toCsv(e),n=e.title?.trim()||`dataview`,r=new Date().toISOString().replace(/[:.]/g,`-`),i=`${n.replace(/[^a-zA-Z0-9-_]+/g,`_`)}-${r}.csv`,a=await b(`directory`);if(!a)return;await this.executeCommand(`touch`,{path:`${a}/${i}`,contents:t})}catch(e){h(e instanceof Error?e.message:String(e))}}async doInitUI(){let e=await this.getDialogSetting();e&&typeof e.autoActivateTab==`boolean`&&(this.autoActivateTab=e.autoActivateTab),this.subscribe(C,async()=>{await this.refreshPersistedList(!0),this.autoActivateTab&&this.activateContainingTab()}),await this.refreshPersistedList(!1)}async refreshPersistedList(e){this.loadingList=!0,this.requestUpdate();try{if(this.persistedList=await M.listViews(),e&&this.persistedList.length>0){let e=this.persistedList[this.persistedList.length-1];this.selectedStorageKey=e.storageKey,this.selectedView=await M.getView(e.storageKey)}else this.selectedView=this.selectedStorageKey?await M.getView(this.selectedStorageKey):null}catch(e){h(e instanceof Error?e.message:String(e)),this.persistedList=[],this.selectedView=null}finally{this.loadingList=!1,this.requestUpdate()}}async selectStorageKey(e){if(this.selectedStorageKey=e,!e){this.selectedView=null,this.requestUpdate();return}try{this.selectedView=await M.getView(e)}catch(e){h(e instanceof Error?e.message:String(e)),this.selectedView=null}this.requestUpdate()}async onAutoActivateChange(e){let t=e.target.checked;this.autoActivateTab=t;let n=await this.getDialogSetting()??{};await this.setDialogSetting({...n,autoActivateTab:t})}async onHistorySelect(e){let t=e.detail?.item?.value??``;!t||t===`__stats__`||await this.selectStorageKey(t)}async onDeleteView(e,t){e.stopPropagation(),e.preventDefault();try{await M.deleteView(t),this.selectedStorageKey===t&&(this.selectedStorageKey=``,this.selectedView=null),await this.refreshPersistedList(!0)}catch(e){h(e instanceof Error?e.message:String(e))}}async onClearHistory(){try{await M.clearAllViews(),this.selectedStorageKey=``,this.selectedView=null,await this.refreshPersistedList(!1)}catch(e){h(e instanceof Error?e.message:String(e))}}renderToolbar(){let e=this.selectedView??this.dataview,t=this.persistedList.find(e=>e.storageKey===this.selectedStorageKey),n=t?.title??e?.title??(this.persistedList.length>0?`Latest data view`:`No data`),r=t?.createdAt??e?.createdAt?new Date(t?.createdAt??e?.createdAt).toLocaleString():null,i=e?.source??null,a=i?`${n} · ${i}`:n,o=r?`${a} (${r})`:a;return c`
        <wa-dropdown
          placement="bottom-start"
          distance="4"
          size="small"
          hoist
          @wa-select=${e=>this.onHistorySelect(e)}
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

          <wa-dropdown-item value="__stats__">
            ${this.persistedList.length} data view${this.persistedList.length===1?``:`s`}
            ${this.persistedList.length>0?c`
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

          ${this.persistedList.map(e=>c`
              <wa-dropdown-item value=${e.storageKey}>
                ${e.source?`${e.title} · ${e.source}`:e.title}
                ${e.createdAt?c`<span style="opacity: 0.7; margin-left: 0.5rem; font-size: 0.75em;">
                      (${new Date(e.createdAt).toLocaleString()})
                    </span>`:null}
                <wa-button
                  slot="details"
                  appearance="plain"
                  size="small"
                  title="Delete data view"
                  @click=${t=>this.onDeleteView(t,e.storageKey)}
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
          @change=${e=>this.onAutoActivateChange(e)}
          style="margin-top: 0.5rem;"
        >
          Auto-show
        </wa-switch>

        ${f(e,()=>c`<wa-divider orientation="vertical"></wa-divider><span>${o}</span>`)}
    `}renderTable(e){return this.hasData?c`<docks-data-table .data=${e.data}></docks-data-table>`:c`<div class="result-empty">No data.</div>`}renderContent(){let e=this.displayed;return e==null?c`<div class="result-empty">No data.</div>`:this.renderTable(e)}static{this.styles=l`
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
  `}};g([u({attribute:!1})],N.prototype,`dataview`,void 0),g([d()],N.prototype,`persistedList`,void 0),g([d()],N.prototype,`selectedStorageKey`,void 0),g([d()],N.prototype,`selectedView`,void 0),g([d()],N.prototype,`loadingList`,void 0),g([d()],N.prototype,`autoActivateTab`,void 0),N=g([p(`docks-dataview`)],N);function P(e){let t=k.default.parse(e,{header:!0,skipEmptyLines:!0}),n=t.meta.fields??[];return{columns:n,rows:t.data.map(e=>n.map(t=>e[t]))}}M.init(),r.put(`dataviewerService`,M),m.registerContribution(y,{name:`view.dataviewer`,label:`Data Views`,icon:`table`,component:e=>c`<docks-dataview id="${e}"></docks-dataview>`}),v.registerEditorInputHandler({editorId:`system.dataviewer-table`,label:`Table`,icon:`table`,ranking:800,canHandle:e=>{if(!(e instanceof i))return!1;let t=e.getName().toLowerCase();return t.endsWith(`.csv`)||t.endsWith(`.tsv`)},handle:async e=>{e.getName();let{columns:t,rows:n}=P(await e.getContents()??``),r={columns:t,rows:n};return{title:e.getWorkspacePath(),data:r,key:e.getWorkspacePath(),icon:`table`,state:{},component:()=>c`<docks-data-table .data=${r}></docks-data-table>`}}});function F(){}export{F as default};