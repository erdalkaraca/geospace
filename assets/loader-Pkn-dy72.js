import{I as e,L as t,k as n,w as r}from"./dist-XDM-k8NY.js";import{I as i,L as a,N as o,P as s,Q as c,U as l}from"./repeat-D7ZcYN9W.js";import{b as u}from"./src-C4qLRiZf.js";import"./lit-D5_fOPyp.js";import{t as d}from"./gs-map-editor-DgzOR9Iv.js";import"./geo-BzR0juPd.js";var f=c`
    wa-dialog {
        --width: 900px;
    }

    wa-dialog::part(body) {
        overflow: hidden;
        padding: 0;
    }

    .style-editor {
        height: 600px;
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }

    wa-tab-group {
        flex: 1;
        min-height: 0;
        display: flex;
        flex-direction: column;
    }

    wa-tab-group::part(base) {
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    wa-tab-group::part(body) {
        flex: 1;
        min-height: 0;
        overflow: hidden;
    }

    wa-tab-panel {
        height: 100%;
    }

    wa-tab-panel::part(base) {
        height: 100%;
        overflow: hidden;
    }

    .style-split-panel,
    .rule-split-panel {
        height: 100%;
    }

    .style-split-panel::part(start),
    .rule-split-panel::part(start),
    .style-split-panel::part(end),
    .rule-split-panel::part(end) {
        overflow: hidden;
    }

    .pane-container {
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow: hidden;
    }

    .pane-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: var(--wa-space-m);
        flex-shrink: 0;
    }

    .pane-header h3 {
        margin: 0;
    }

    .pane-scroller {
        flex: 1;
        min-height: 0;
    }

    .empty-message {
        color: var(--wa-color-text-quiet);
        text-align: center;
        padding: var(--wa-space-xl);
    }

    .style-tree,
    .rule-tree {
        padding: 0 var(--wa-space-m) var(--wa-space-m);
    }

    .tree-item-content {
        display: flex;
        align-items: center;
        gap: var(--wa-space-s);
        width: 100%;
    }

    .style-preview-small {
        flex-shrink: 0;
    }

    .style-preview-small svg {
        width: 24px;
        height: 24px;
    }

    .style-id {
        flex: 1;
    }

    .rule-summary {
        color: var(--wa-color-text-quiet);
        flex: 1;
        margin-left: var(--wa-space-s);
    }

    .detail-panel {
        display: flex;
        flex-direction: column;
        gap: var(--wa-space-m);
        padding: var(--wa-space-m);
    }

    .detail-panel h3 {
        margin: 0;
    }

    .detail-panel.empty {
        height: 100%;
        align-items: center;
        justify-content: center;
        color: var(--wa-color-text-quiet);
    }

    .form-section {
        display: flex;
        flex-direction: column;
        gap: var(--wa-space-s);
        padding: var(--wa-space-m);
        background-color: var(--wa-color-surface-raised);
        border: 1px solid var(--wa-color-surface-border);
        border-radius: var(--wa-border-radius-medium);
    }

    .form-section h4 {
        margin: 0 0 var(--wa-space-s) 0;
        padding-bottom: var(--wa-space-s);
        border-bottom: 1px solid var(--wa-color-surface-border);
        color: var(--wa-color-text-normal);
    }

    .geometry-types {
        margin: 0 0 var(--wa-space-m) 0;
        padding: var(--wa-space-s);
        background-color: var(--wa-color-surface-lowered);
        border-radius: var(--wa-border-radius-small);
        color: var(--wa-color-text-quiet);
        font-size: 0.875rem;
    }

    .form-section wa-divider {
        margin: var(--wa-space-s) 0;
    }

    .form-section wa-slider {
        --track-height: 4px;
    }

    .help-text {
        margin: 0;
        font-size: 0.75rem;
        color: var(--wa-color-text-quiet);
    }

    .form-section wa-textarea {
        --height: auto;
    }
`;function p(e){let t=e.stroke?.color||`transparent`,n=e.fill?.color||`transparent`,r=Math.min(e.stroke?.width||1,5),i=e.stroke?.lineDash?.join(` `)||`none`,a=e.stroke?.lineCap||`round`,o=e.stroke?.lineJoin||`round`;return e.image?.type===`circle`?m(e,t,n,r):e.image?.type===`regular-shape`?h(e,t,n,r):e.image?.type===`icon`?g(e):l`
        <svg width="40" height="40" viewBox="0 0 40 40">
            <rect
                x="5"
                y="5"
                width="30"
                height="30"
                fill="${n}"
                stroke="${t}"
                stroke-width="${r}"
                stroke-dasharray="${i}"
                stroke-linecap="${a}"
                stroke-linejoin="${o}"
            />
        </svg>
    `}function m(e,t,n,r){let i=Math.min(e.image?.radius||5,15),a=e.image?.fill?.color||n,o=e.image?.stroke?.color||t,s=Math.min(e.image?.stroke?.width||r,3),c=e.image?.opacity??1,u=(e.image?.rotation||0)*(180/Math.PI);return l`
        <svg width="40" height="40" viewBox="0 0 40 40">
            <circle
                cx="20"
                cy="20"
                r="${i*(e.image?.scale||1)}"
                fill="${a}"
                stroke="${o}"
                stroke-width="${s}"
                opacity="${c}"
                transform="rotate(${u}, 20, 20)"
            />
        </svg>
    `}function h(e,t,n,r){let i=e.image?.points||5,a=Math.min(e.image?.radius||10,15),o=e.image?.fill?.color||n,s=e.image?.stroke?.color||t,c=Math.min(e.image?.stroke?.width||r,3),u=e.image?.opacity??1,d=((e.image?.rotation||0)+(e.image?.angle||0))*(180/Math.PI);return l`
        <svg width="40" height="40" viewBox="0 0 40 40">
            <polygon
                points="${_(20,20,a,i,e.image?.radius2)}"
                fill="${o}"
                stroke="${s}"
                stroke-width="${c}"
                opacity="${u}"
                transform="rotate(${d}, 20, 20)"
            />
        </svg>
    `}function g(e){let t=e.image?.src,n=e.image?.color||`#0064ff`,r=e.image?.opacity??1,i=(e.image?.rotation||0)*(180/Math.PI),a=e.image?.scale||1;return t?t.startsWith(`data:image/svg+xml`)?l`
            <div
                style="
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: ${n};
                    opacity: ${r};
                    transform: rotate(${i}deg) scale(${a});
                "
            >
                <img
                    src="${t}"
                    width="24"
                    height="24"
                    style="filter: drop-shadow(0 0 0 ${n});"
                    alt="icon"
                />
            </div>
        `:l`
        <div
            style="
                width: 40px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                opacity: ${r};
                transform: rotate(${i}deg) scale(${a});
            "
        >
            <img
                src="${t}"
                width="24"
                height="24"
                alt="icon"
                style="object-fit: contain;"
                @error=${e=>{let t=e.target;t.style.display=`none`}}
            />
        </div>
    `:l`
            <svg width="40" height="40" viewBox="0 0 40 40">
                <rect
                    x="8"
                    y="8"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="${n}"
                    stroke-width="2"
                    stroke-dasharray="4 2"
                    opacity="${r}"
                />
                <text
                    x="20"
                    y="24"
                    text-anchor="middle"
                    font-size="12"
                    fill="${n}"
                    opacity="${r}"
                >
                    ?
                </text>
            </svg>
        `}function _(e,t,n,r,i){let a=[],o=2*Math.PI/r,s=-Math.PI/2;if(i!==void 0)for(let c=0;c<r*2;c++){let r=c%2==0?n:i,l=s+c*o/2,u=e+r*Math.cos(l),d=t+r*Math.sin(l);a.push(`${u},${d}`)}else for(let i=0;i<r;i++){let r=s+i*o,c=e+n*Math.cos(r),l=t+n*Math.sin(r);a.push(`${c},${l}`)}return a.join(` `)}function v(e,t){let n=new Set;for(let r of t)r.styleId===e&&r.condition.geometryType&&(Array.isArray(r.condition.geometryType)?r.condition.geometryType:[r.condition.geometryType]).forEach(e=>n.add(e));return Array.from(n)}function y(e){return e.some(e=>e===u.Point||e===u.MultiPoint)}function b(e){return e.some(e=>e===u.LineString||e===u.MultiLineString)}function x(e){return e.some(e=>e===u.Polygon||e===u.MultiPolygon||e===u.Circle)}function S(e,t){if(t.length===0)return!0;let n=y(t),r=b(t),i=x(t);switch(e){case`stroke`:return r||i;case`fill`:return i;case`image`:return n||r||i;default:return!0}}function C(e){let t=[];if(e.condition.geometryType){let n=Array.isArray(e.condition.geometryType)?e.condition.geometryType:[e.condition.geometryType];t.push(`Type: ${n.join(`, `)}`)}if(e.condition.layerName&&t.push(`Layer: ${e.condition.layerName}`),e.condition.property){let n=e.condition.property;t.push(`${n.key} ${n.operator||`exists`} ${n.value||``}`)}return t.join(` | `)||`All features`}var w={solid:void 0,dashed:[10,5],dotted:[2,5],"dash-dot":[10,5,2,5],"long-dash":[20,10]},T={marker:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="{{COLOR}}" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>`,pin:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="{{COLOR}}" d="M16 12V4h1V2H7v2h1v8l-2 2v2h5.2v6h1.6v-6H18v-2l-2-2z"/></svg>`,flag:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="{{COLOR}}" d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="{{COLOR}}" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`,cross:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="{{COLOR}}" d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"/></svg>`},E=`#0064ff`;function D(e,t=E){let n=T[e];return n?z(n.replace(/\{\{COLOR\}\}/g,t),24):``}function O(e){if(!e.startsWith(`data:image/svg+xml;base64,`))return null;try{let t=e.replace(`data:image/svg+xml;base64,`,``),n=decodeURIComponent(escape(atob(t)));for(let[e,t]of Object.entries(T)){let r=t.match(/d="([^"]+)"/)?.[1],i=n.match(/d="([^"]+)"/)?.[1];if(r&&i&&r===i)return e}}catch{}return null}function k(e){if(!e.startsWith(`data:image/svg+xml;base64,`))return null;try{let t=e.replace(`data:image/svg+xml;base64,`,``),n=decodeURIComponent(escape(atob(t))).match(/fill="([^"]+)"/);return n?n[1]:null}catch{return null}}var A={triangle:{points:3},square:{points:4},pentagon:{points:5},hexagon:{points:6},"star-4":{points:4,radius2:.4},"star-5":{points:5,radius2:.4},"star-6":{points:6,radius2:.5}};function j(e){if(!e)return`solid`;let t=e.join(`,`);for(let[e,n]of Object.entries(w))if(n&&n.join(`,`)===t)return e;return`custom`}function M(e,t){if(!e)return`triangle`;for(let[n,r]of Object.entries(A))if(r.points===e&&(r.radius2!==void 0&&t!==void 0||r.radius2===void 0&&t===void 0))return n;return`custom`}function N(e,t,n,r){let i=S(`stroke`,n),a=S(`fill`,n),o=S(`image`,n);return l`
        <div class="detail-panel">
            <h3>Edit Style: ${e}</h3>
            ${n.length>0?l`
                      <p class="geometry-types">
                          Geometry types: ${n.join(`, `)}
                      </p>
                  `:``}

            ${i?P(t,r):``}
            ${a?F(t,r):``}
            ${o?I(t,r):``}
        </div>
    `}function P(e,t){let n=j(e.stroke?.lineDash);return l`
        <div class="form-section">
            <h4>Stroke</h4>
            <wa-color-picker
                label="Color"
                value="${e.stroke?.color||`#000000`}"
                opacity
                size="small"
                @change=${e=>t.onStrokeColorChange(e.target.value)}
            ></wa-color-picker>
            <wa-input
                type="number"
                label="Width"
                value="${e.stroke?.width||``}"
                min="0"
                step="0.5"
                @input=${e=>t.onStrokeWidthChange(parseFloat(e.target.value))}
            ></wa-input>
            <wa-select
                label="Line Style"
                value="${n}"
                @change=${e=>t.onStrokeLineDashChange(w[e.target.value])}
            >
                <wa-option value="solid">Solid</wa-option>
                <wa-option value="dashed">Dashed</wa-option>
                <wa-option value="dotted">Dotted</wa-option>
                <wa-option value="dash-dot">Dash-Dot</wa-option>
                <wa-option value="long-dash">Long Dash</wa-option>
            </wa-select>
            <wa-select
                label="Line Cap"
                value="${e.stroke?.lineCap||`round`}"
                @change=${e=>t.onStrokeLineCapChange(e.target.value)}
            >
                <wa-option value="butt">Butt</wa-option>
                <wa-option value="round">Round</wa-option>
                <wa-option value="square">Square</wa-option>
            </wa-select>
            <wa-select
                label="Line Join"
                value="${e.stroke?.lineJoin||`round`}"
                @change=${e=>t.onStrokeLineJoinChange(e.target.value)}
            >
                <wa-option value="bevel">Bevel</wa-option>
                <wa-option value="round">Round</wa-option>
                <wa-option value="miter">Miter</wa-option>
            </wa-select>
        </div>
    `}function F(e,t){return l`
        <div class="form-section">
            <h4>Fill</h4>
            <wa-color-picker
                label="Color"
                value="${e.fill?.color||`#000000`}"
                opacity
                size="small"
                @change=${e=>t.onFillColorChange(e.target.value)}
            ></wa-color-picker>
        </div>
    `}function I(e,t){let n=e.image?.type||`circle`;return l`
        <div class="form-section">
            <h4>Point Symbol</h4>
            <wa-select
                label="Symbol Type"
                value="${n}"
                @change=${e=>t.onImageTypeChange(e.target.value)}
            >
                <wa-option value="circle">Circle</wa-option>
                <wa-option value="regular-shape">Shape</wa-option>
                <wa-option value="icon">Icon</wa-option>
            </wa-select>

            ${n===`circle`?L(e,t):``}
            ${n===`regular-shape`?R(e,t):``}
            ${n===`icon`?B(e,t):``}

            ${e.image?V(e,t):``}
        </div>
    `}function L(e,t){return l`
        <wa-divider></wa-divider>
        <wa-input
            type="number"
            label="Radius"
            value="${e.image?.radius||5}"
            min="1"
            step="1"
            @input=${e=>t.onImageRadiusChange(parseFloat(e.target.value))}
        ></wa-input>
        <wa-color-picker
            label="Fill Color"
            value="${e.image?.fill?.color||`#0064ff`}"
            opacity
            size="small"
            @change=${e=>t.onImageFillColorChange(e.target.value)}
        ></wa-color-picker>
        <wa-color-picker
            label="Stroke Color"
            value="${e.image?.stroke?.color||`#ffffff`}"
            opacity
            size="small"
            @change=${e=>t.onImageStrokeColorChange(e.target.value)}
        ></wa-color-picker>
        <wa-input
            type="number"
            label="Stroke Width"
            value="${e.image?.stroke?.width||2}"
            min="0"
            step="0.5"
            @input=${e=>t.onImageStrokeWidthChange(parseFloat(e.target.value))}
        ></wa-input>
    `}function R(e,t){let n=M(e.image?.points,e.image?.radius2),r=e.image?.radius2!==void 0;return l`
        <wa-divider></wa-divider>
        <wa-select
            label="Shape Preset"
            value="${n}"
            @change=${n=>{let r=A[n.target.value];r&&(t.onImagePointsChange(r.points),t.onImageRadius2Change(r.radius2===void 0?void 0:r.radius2*(e.image?.radius||10)))}}
        >
            <small slot="label">Polygons</small>
            <wa-option value="triangle">Triangle</wa-option>
            <wa-option value="square">Square</wa-option>
            <wa-option value="pentagon">Pentagon</wa-option>
            <wa-option value="hexagon">Hexagon</wa-option>
            <wa-divider></wa-divider>
            <small slot="label">Stars</small>
            <wa-option value="star-4">4-Point Star</wa-option>
            <wa-option value="star-5">5-Point Star</wa-option>
            <wa-option value="star-6">6-Point Star</wa-option>
        </wa-select>
        <wa-input
            type="number"
            label="Points"
            value="${e.image?.points||5}"
            min="3"
            max="12"
            step="1"
            @input=${e=>t.onImagePointsChange(parseInt(e.target.value))}
        ></wa-input>
        <wa-input
            type="number"
            label="Outer Radius"
            value="${e.image?.radius||10}"
            min="1"
            step="1"
            @input=${e=>t.onImageRadiusChange(parseFloat(e.target.value))}
        ></wa-input>
        <wa-switch
            ?checked=${r}
            @change=${n=>{n.target.checked?t.onImageRadius2Change((e.image?.radius||10)*.4):t.onImageRadius2Change(void 0)}}
        >
            Star shape (inner radius)
        </wa-switch>
        ${r?l`
                  <wa-input
                      type="number"
                      label="Inner Radius"
                      value="${e.image?.radius2||4}"
                      min="1"
                      step="1"
                      @input=${e=>t.onImageRadius2Change(parseFloat(e.target.value))}
                  ></wa-input>
              `:``}
        <wa-input
            type="number"
            label="Angle (degrees)"
            value="${(e.image?.angle||0)*180/Math.PI}"
            step="15"
            @input=${e=>t.onImageAngleChange(parseFloat(e.target.value)*Math.PI/180)}
        ></wa-input>
        <wa-color-picker
            label="Fill Color"
            value="${e.image?.fill?.color||`#0064ff`}"
            opacity
            size="small"
            @change=${e=>t.onImageFillColorChange(e.target.value)}
        ></wa-color-picker>
        <wa-color-picker
            label="Stroke Color"
            value="${e.image?.stroke?.color||`#ffffff`}"
            opacity
            size="small"
            @change=${e=>t.onImageStrokeColorChange(e.target.value)}
        ></wa-color-picker>
        <wa-input
            type="number"
            label="Stroke Width"
            value="${e.image?.stroke?.width||2}"
            min="0"
            step="0.5"
            @input=${e=>t.onImageStrokeWidthChange(parseFloat(e.target.value))}
        ></wa-input>
    `}function z(e,t=24){let n=e.trim();if(!n.startsWith(`<svg`)&&!n.startsWith(`<?xml`))throw Error(`Invalid SVG markup`);return n=n.replace(/<\?xml[^>]*\?>\s*/i,``),n.includes(`width=`)||(n=n.replace(`<svg`,`<svg width="${t}"`)),n.includes(`height=`)||(n=n.replace(`<svg`,`<svg height="${t}"`)),`data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(n)))}`}function B(e,t){let n=e.image?.src||``,r=n.startsWith(`data:`),i=r?O(n):null,a=i!==null,o=r&&!a,s=!r&&n.length>0,c=(r?k(n):null)||e.image?.color||E;if(!n){let e=D(`marker`,c);setTimeout(()=>t.onImageSrcChange(e),0),n=e,a=!0}let u=`marker`;return a&&i?u=i:a&&!i?u=`marker`:o?u=`paste-svg`:s&&(u=`custom-url`),l`
        <wa-divider></wa-divider>
        <wa-select
            label="Icon Source"
            value="${u}"
            @change=${e=>{let n=e.target.value;if(T[n]){let e=D(n,c);t.onImageSrcChange(e)}else (n===`paste-svg`||n===`custom-url`)&&t.onImageSrcChange(``)}}
        >
            <small>Presets</small>
            <wa-option value="marker">Marker</wa-option>
            <wa-option value="pin">Pin</wa-option>
            <wa-option value="flag">Flag</wa-option>
            <wa-option value="star">Star</wa-option>
            <wa-option value="cross">Cross</wa-option>
            <wa-divider></wa-divider>
            <small>Custom</small>
            <wa-option value="custom-url">URL</wa-option>
            <wa-option value="paste-svg">Paste SVG</wa-option>
        </wa-select>

        ${s||u===`custom-url`?l`
                  <wa-input
                      label="Icon URL"
                      value="${n}"
                      placeholder="https://example.com/icon.svg"
                      @input=${e=>t.onImageSrcChange(e.target.value)}
                  ></wa-input>
              `:``}

        ${u===`paste-svg`?l`
                  <wa-textarea
                      label="Paste SVG Code"
                      placeholder="<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 24 24&quot;>...</svg>"
                      rows="4"
                      @input=${e=>{let n=e.target.value.trim();if(n&&n.startsWith(`<svg`))try{let e=z(n,24);t.onImageSrcChange(e)}catch(e){console.warn(`Invalid SVG:`,e)}}}
                  ></wa-textarea>
                  <p class="help-text">
                      Paste SVG markup. Width/height will be set to 24px
                      automatically.
                  </p>
              `:``}

        ${a?l`
                  <wa-color-picker
                      label="Fill Color"
                      value="${c}"
                      opacity
                      size="small"
                      @change=${e=>{let n=i||u;if(T[n]){let r=D(n,e.target.value);t.onImageSrcChange(r)}}}
                  ></wa-color-picker>
              `:l`
                  <wa-color-picker
                      label="Tint Color"
                      value="${e.image?.color||E}"
                      opacity
                      size="small"
                      @change=${e=>t.onImageColorChange(e.target.value)}
                  ></wa-color-picker>
                  <p class="help-text">
                      Tint only works with some image formats.
                  </p>
              `}

        <wa-input
            type="number"
            label="Scale"
            value="${e.image?.scale||1}"
            min="0.1"
            max="10"
            step="0.1"
            @input=${e=>t.onImageScaleChange(parseFloat(e.target.value))}
        ></wa-input>
    `}function V(e,t){let n=e.image?.type!==`icon`;return l`
        <wa-divider></wa-divider>
        <wa-input
            type="number"
            label="Rotation (degrees)"
            value="${(e.image?.rotation||0)*180/Math.PI}"
            step="15"
            @input=${e=>t.onImageRotationChange(parseFloat(e.target.value)*Math.PI/180)}
        ></wa-input>
        <wa-slider
            label="Opacity"
            value="${(e.image?.opacity??1)*100}"
            min="0"
            max="100"
            step="5"
            @change=${e=>t.onImageOpacityChange(e.target.value/100)}
        ></wa-slider>
        ${n?l`
                  <wa-input
                      type="number"
                      label="Scale"
                      value="${e.image?.scale||1}"
                      min="0.1"
                      max="10"
                      step="0.1"
                      @input=${e=>t.onImageScaleChange(parseFloat(e.target.value))}
                  ></wa-input>
              `:``}
    `}function H(e,t){return l`
        <div class="detail-panel">
            <h3>Edit Rule: ${e}</h3>

            ${U(t)}
            ${G(t)}
        </div>
    `}function U(e){return l`
        <div class="form-section">
            <h4>Condition</h4>
            ${e.condition.geometryType?l`
                      <wa-input
                          label="Geometry Type"
                          value="${Array.isArray(e.condition.geometryType)?e.condition.geometryType.join(`, `):e.condition.geometryType}"
                          readonly
                      ></wa-input>
                  `:``}
            ${e.condition.layerName?l`
                      <wa-input
                          label="Layer Name"
                          value="${e.condition.layerName}"
                          readonly
                      ></wa-input>
                  `:``}
            ${e.condition.property?W(e.condition.property):``}
        </div>
    `}function W(e){return l`
        <wa-input
            label="Property Key"
            value="${e.key}"
            readonly
        ></wa-input>
        <wa-input
            label="Operator"
            value="${e.operator||`exists`}"
            readonly
        ></wa-input>
        ${e.value===void 0?``:l`
                  <wa-input
                      label="Value"
                      value="${e.value}"
                      readonly
                  ></wa-input>
              `}
    `}function G(e){return l`
        <div class="form-section">
            <h4>Style</h4>
            <wa-input
                label="Style ID"
                value="${e.styleId}"
                readonly
            ></wa-input>
        </div>
    `}function K(e,t,n,r){let i=e[t];if(!i)return null;let a=i;for(let e=0;e<n.length-1;e++){let t=n[e];a[t]||(a[t]={}),a=a[t]}let o=n[n.length-1];return a[o]===r?null:(r===void 0?delete a[o]:a[o]=r,{...e})}function q(e){return{onStrokeColorChange:t=>e([`stroke`,`color`],t),onStrokeWidthChange:t=>e([`stroke`,`width`],t),onStrokeLineDashChange:t=>e([`stroke`,`lineDash`],t),onStrokeLineCapChange:t=>e([`stroke`,`lineCap`],t),onStrokeLineJoinChange:t=>e([`stroke`,`lineJoin`],t),onFillColorChange:t=>e([`fill`,`color`],t),onImageTypeChange:t=>e([`image`,`type`],t),onImageRotationChange:t=>e([`image`,`rotation`],t),onImageOpacityChange:t=>e([`image`,`opacity`],t),onImageScaleChange:t=>e([`image`,`scale`],t),onImageRadiusChange:t=>e([`image`,`radius`],t),onImageFillColorChange:t=>e([`image`,`fill`,`color`],t),onImageStrokeColorChange:t=>e([`image`,`stroke`,`color`],t),onImageStrokeWidthChange:t=>e([`image`,`stroke`,`width`],t),onImageSrcChange:t=>e([`image`,`src`],t),onImageColorChange:t=>e([`image`,`color`],t),onImageAnchorChange:t=>e([`image`,`anchor`],t),onImagePointsChange:t=>e([`image`,`points`],t),onImageRadius2Change:t=>e([`image`,`radius2`],t),onImageAngleChange:t=>e([`image`,`angle`],t)}}var J=class extends a{constructor(...e){super(...e),this.open=!1,this.handleDialogHide=e=>{e.target.tagName.toLowerCase()===`wa-dialog`&&this.hide()},this.handleCancel=()=>{this.hide()},this.handleSave=()=>{this.gsMap&&this.workingStyles&&this.workingRules&&(this.gsMap.styles=this.workingStyles,this.gsMap.styleRules=this.workingRules),this.onSave?.(),this.hide()},this.handleAddStyle=()=>{console.log(`Add style`)},this.handleAddRule=()=>{console.log(`Add rule`)}}static{this.styles=f}show(e){this.onSave=e,this.gsMap&&(this.workingStyles=JSON.parse(JSON.stringify(this.gsMap.styles||{})),this.workingRules=JSON.parse(JSON.stringify(this.gsMap.styleRules||[]))),this.open=!0,this.requestUpdate()}hide(){this.open=!1,this.selectedStyleId=void 0,this.selectedRuleId=void 0,this.workingStyles=void 0,this.workingRules=void 0,this.gsMap=void 0,this.requestUpdate()}render(){return this.open?l`
            <wa-dialog
                label="Style Editor"
                ?open=${this.open}
                @wa-hide=${this.handleDialogHide}
            >
                <div class="style-editor">
                    <wa-tab-group>
                        <wa-tab slot="nav" panel="styles">Styles</wa-tab>
                        <wa-tab slot="nav" panel="rules">Rules</wa-tab>

                        <wa-tab-panel name="styles">
                            ${this.renderStylesTab()}
                        </wa-tab-panel>

                        <wa-tab-panel name="rules">
                            ${this.renderRulesTab()}
                        </wa-tab-panel>
                    </wa-tab-group>
                </div>

                <div slot="footer">
                    <wa-button @click=${this.handleCancel}>Cancel</wa-button>
                    <wa-button variant="primary" @click=${this.handleSave}
                        >Save</wa-button
                    >
                </div>
            </wa-dialog>
        `:null}renderStylesTab(){return l`
            <wa-split-panel position="40" class="style-split-panel">
                <div slot="start" class="pane-container">
                    <div class="pane-header">
                        <h3>Styles</h3>
                        <wa-button size="small" @click=${this.handleAddStyle}>
                            <wa-icon name="plus"></wa-icon> Add Style
                        </wa-button>
                    </div>
                    <wa-scroller orientation="vertical" class="pane-scroller">
                        ${this.renderStylesTree()}
                    </wa-scroller>
                </div>
                <div slot="end" class="pane-container">
                    <wa-scroller orientation="vertical" class="pane-scroller">
                        ${this.renderSelectedStyleDetail()}
                    </wa-scroller>
                </div>
            </wa-split-panel>
        `}renderStylesTree(){return!this.workingStyles||Object.keys(this.workingStyles).length===0?l`<p class="empty-message">No styles available</p>`:l`
            <wa-tree selection="single" class="style-tree">
                ${Object.entries(this.workingStyles).map(([e])=>this.renderStyleTreeItem(e))}
            </wa-tree>
        `}renderStyleTreeItem(e){let t=this.workingStyles[e];return l`
            <wa-tree-item
                ?selected=${this.selectedStyleId===e}
                @click=${t=>{t.stopPropagation(),this.handleStyleSelect(e)}}
            >
                <div class="tree-item-content">
                    <div class="style-preview-small">
                        ${p(t)}
                    </div>
                    <span class="style-id">${e}</span>
                    <wa-icon-button
                        name="trash"
                        size="small"
                        @click=${t=>this.handleDeleteStyle(t,e)}
                    ></wa-icon-button>
                </div>
            </wa-tree-item>
        `}renderSelectedStyleDetail(){if(!this.selectedStyleId||!this.workingStyles?.[this.selectedStyleId])return l`
                <div class="detail-panel empty">
                    <p>Select a style to edit</p>
                </div>
            `;let e=this.workingStyles[this.selectedStyleId],t=v(this.selectedStyleId,this.workingRules||[]),n=q((e,t)=>this.updateStyleProperty(e,t));return N(this.selectedStyleId,e,t,n)}renderRulesTab(){return l`
            <wa-split-panel position="40" class="rule-split-panel">
                <div slot="start" class="pane-container">
                    <div class="pane-header">
                        <h3>Style Rules</h3>
                        <wa-button size="small" @click=${this.handleAddRule}>
                            <wa-icon name="plus"></wa-icon> Add Rule
                        </wa-button>
                    </div>
                    <wa-scroller orientation="vertical" class="pane-scroller">
                        ${this.renderRulesTree()}
                    </wa-scroller>
                </div>
                <div slot="end" class="pane-container">
                    <wa-scroller orientation="vertical" class="pane-scroller">
                        ${this.renderSelectedRuleDetail()}
                    </wa-scroller>
                </div>
            </wa-split-panel>
        `}renderRulesTree(){return!this.workingRules||this.workingRules.length===0?l`<p class="empty-message">No rules available</p>`:l`
            <wa-tree selection="single" class="rule-tree">
                ${this.workingRules.map((e,t)=>this.renderRuleTreeItem(e,t))}
            </wa-tree>
        `}renderRuleTreeItem(e,t){let n=e.id||`rule-${t}`;return l`
            <wa-tree-item
                ?selected=${this.selectedRuleId===n}
                @click=${()=>this.handleRuleSelect(n)}
            >
                <div class="tree-item-content">
                    <wa-icon
                        name="code-branch"
                        variant="regular"
                    ></wa-icon>
                    <span class="rule-id">${n}</span>
                    <span class="rule-summary"
                        >${C(e)} →
                        ${e.styleId}</span
                    >
                    <wa-icon-button
                        name="trash"
                        size="small"
                        @click=${e=>this.handleDeleteRule(e,n)}
                    ></wa-icon-button>
                </div>
            </wa-tree-item>
        `}renderSelectedRuleDetail(){if(!this.selectedRuleId||!this.workingRules)return l`
                <div class="detail-panel empty">
                    <p>Select a rule to edit</p>
                </div>
            `;let e=this.workingRules.find((e,t)=>(e.id||`rule-${t}`)===this.selectedRuleId);return e?H(this.selectedRuleId,e):l`
                <div class="detail-panel empty">
                    <p>Select a rule to edit</p>
                </div>
            `}handleStyleSelect(e){this.selectedStyleId!==e&&(this.selectedStyleId=e,this.requestUpdate())}handleRuleSelect(e){this.selectedRuleId!==e&&(this.selectedRuleId=e,this.requestUpdate())}handleDeleteStyle(e,t){e.stopPropagation(),this.workingStyles&&confirm(`Delete style "${t}"?`)&&(delete this.workingStyles[t],this.selectedStyleId===t&&(this.selectedStyleId=void 0),this.workingStyles={...this.workingStyles})}handleDeleteRule(e,t){if(e.stopPropagation(),!this.workingRules)return;let n=this.workingRules.findIndex((e,n)=>(e.id||`rule-${n}`)===t);n!==-1&&confirm(`Delete rule "${t}"?`)&&(this.workingRules.splice(n,1),this.selectedRuleId===t&&(this.selectedRuleId=void 0),this.workingRules=[...this.workingRules])}updateStyleProperty(e,t){if(!this.selectedStyleId||!this.workingStyles)return;let n=K(this.workingStyles,this.selectedStyleId,e,t);n&&(this.workingStyles=n)}};r([s({type:Object})],J.prototype,`gsMap`,void 0),r([s({type:Boolean})],J.prototype,`open`,void 0),r([o()],J.prototype,`selectedStyleId`,void 0),r([o()],J.prototype,`selectedRuleId`,void 0),r([o()],J.prototype,`workingStyles`,void 0),r([o()],J.prototype,`workingRules`,void 0),J=r([i(`gs-style-editor`)],J);var Y=({commandRegistry:r})=>{r.registerAll({command:{id:`edit_styles`,name:`Edit Styles`,description:`Opens the style editor to define and edit map styles and rules`,parameters:[]},handler:{execute:async r=>{let i=n.get();if(!(i instanceof d)){e(`No active map editor`);return}let a=i.getGsMap();if(!a){e(`Map not initialized`);return}let o=document.querySelector(`gs-style-editor`);o||(o=new J,document.body.appendChild(o)),o.gsMap=a,await o.updateComplete,o.show(()=>{i.markDirty(!0),i.refresh(),t(`Styles updated`)})}},contribution:{target:`toolbar:map-editor`,icon:`palette`,label:`Edit Styles`,disabled:()=>!(n.get()instanceof d)}})};export{Y as default};