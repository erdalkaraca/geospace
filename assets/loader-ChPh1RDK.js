import{L as e,Q as t,U as n,_ as r,b as i,v as a}from"./repeat-jF3QiNU_.js";import{R as o,T as s,j as c,z as l}from"./dist-Bs3vRgSi.js";import{b as u}from"./src-Der9vNwe.js";import"./lit-CjwmRm-7.js";import{t as d}from"./gs-map-editor-BPogudwq.js";import"./geo-BE8bRSfB.js";var f=t`
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
`;function p(e){let t=e.stroke?.color||`transparent`,r=e.fill?.color||`transparent`,i=Math.min(e.stroke?.width||1,5),a=e.stroke?.lineDash?.join(` `)||`none`,o=e.stroke?.lineCap||`round`,s=e.stroke?.lineJoin||`round`;return e.image?.type===`circle`?m(e,t,r,i):e.image?.type===`regular-shape`?h(e,t,r,i):e.image?.type===`icon`?g(e):n`
        <svg width="40" height="40" viewBox="0 0 40 40">
            <rect
                x="5"
                y="5"
                width="30"
                height="30"
                fill="${r}"
                stroke="${t}"
                stroke-width="${i}"
                stroke-dasharray="${a}"
                stroke-linecap="${o}"
                stroke-linejoin="${s}"
            />
        </svg>
    `}function m(e,t,r,i){let a=Math.min(e.image?.radius||5,15),o=e.image?.fill?.color||r,s=e.image?.stroke?.color||t,c=Math.min(e.image?.stroke?.width||i,3),l=e.image?.opacity??1,u=(e.image?.rotation||0)*(180/Math.PI);return n`
        <svg width="40" height="40" viewBox="0 0 40 40">
            <circle
                cx="20"
                cy="20"
                r="${a*(e.image?.scale||1)}"
                fill="${o}"
                stroke="${s}"
                stroke-width="${c}"
                opacity="${l}"
                transform="rotate(${u}, 20, 20)"
            />
        </svg>
    `}function h(e,t,r,i){let a=e.image?.points||5,o=Math.min(e.image?.radius||10,15),s=e.image?.fill?.color||r,c=e.image?.stroke?.color||t,l=Math.min(e.image?.stroke?.width||i,3),u=e.image?.opacity??1,d=((e.image?.rotation||0)+(e.image?.angle||0))*(180/Math.PI);return n`
        <svg width="40" height="40" viewBox="0 0 40 40">
            <polygon
                points="${_(20,20,o,a,e.image?.radius2)}"
                fill="${s}"
                stroke="${c}"
                stroke-width="${l}"
                opacity="${u}"
                transform="rotate(${d}, 20, 20)"
            />
        </svg>
    `}function g(e){let t=e.image?.src,r=e.image?.color||`#0064ff`,i=e.image?.opacity??1,a=(e.image?.rotation||0)*(180/Math.PI),o=e.image?.scale||1;return t?t.startsWith(`data:image/svg+xml`)?n`
            <div
                style="
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: ${r};
                    opacity: ${i};
                    transform: rotate(${a}deg) scale(${o});
                "
            >
                <img
                    src="${t}"
                    width="24"
                    height="24"
                    style="filter: drop-shadow(0 0 0 ${r});"
                    alt="icon"
                />
            </div>
        `:n`
        <div
            style="
                width: 40px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                opacity: ${i};
                transform: rotate(${a}deg) scale(${o});
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
    `:n`
            <svg width="40" height="40" viewBox="0 0 40 40">
                <rect
                    x="8"
                    y="8"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="${r}"
                    stroke-width="2"
                    stroke-dasharray="4 2"
                    opacity="${i}"
                />
                <text
                    x="20"
                    y="24"
                    text-anchor="middle"
                    font-size="12"
                    fill="${r}"
                    opacity="${i}"
                >
                    ?
                </text>
            </svg>
        `}function _(e,t,n,r,i){let a=[],o=2*Math.PI/r,s=-Math.PI/2;if(i!==void 0)for(let c=0;c<r*2;c++){let r=c%2==0?n:i,l=s+c*o/2,u=e+r*Math.cos(l),d=t+r*Math.sin(l);a.push(`${u},${d}`)}else for(let i=0;i<r;i++){let r=s+i*o,c=e+n*Math.cos(r),l=t+n*Math.sin(r);a.push(`${c},${l}`)}return a.join(` `)}function v(e,t){let n=new Set;for(let r of t)r.styleId===e&&r.condition.geometryType&&(Array.isArray(r.condition.geometryType)?r.condition.geometryType:[r.condition.geometryType]).forEach(e=>n.add(e));return Array.from(n)}function y(e){return e.some(e=>e===u.Point||e===u.MultiPoint)}function b(e){return e.some(e=>e===u.LineString||e===u.MultiLineString)}function x(e){return e.some(e=>e===u.Polygon||e===u.MultiPolygon||e===u.Circle)}function S(e,t){if(t.length===0)return!0;let n=y(t),r=b(t),i=x(t);switch(e){case`stroke`:return r||i;case`fill`:return i;case`image`:return n||r||i;default:return!0}}function C(e){let t=[];if(e.condition.geometryType){let n=Array.isArray(e.condition.geometryType)?e.condition.geometryType:[e.condition.geometryType];t.push(`Type: ${n.join(`, `)}`)}if(e.condition.layerName&&t.push(`Layer: ${e.condition.layerName}`),e.condition.property){let n=e.condition.property;t.push(`${n.key} ${n.operator||`exists`} ${n.value||``}`)}return t.join(` | `)||`All features`}var w={solid:void 0,dashed:[10,5],dotted:[2,5],"dash-dot":[10,5,2,5],"long-dash":[20,10]},T={marker:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="{{COLOR}}" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>`,pin:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="{{COLOR}}" d="M16 12V4h1V2H7v2h1v8l-2 2v2h5.2v6h1.6v-6H18v-2l-2-2z"/></svg>`,flag:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="{{COLOR}}" d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="{{COLOR}}" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`,cross:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="{{COLOR}}" d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"/></svg>`},E=`#0064ff`;function D(e,t=E){let n=T[e];return n?z(n.replace(/\{\{COLOR\}\}/g,t),24):``}function O(e){if(!e.startsWith(`data:image/svg+xml;base64,`))return null;try{let t=e.replace(`data:image/svg+xml;base64,`,``),n=decodeURIComponent(escape(atob(t)));for(let[e,t]of Object.entries(T)){let r=t.match(/d="([^"]+)"/)?.[1],i=n.match(/d="([^"]+)"/)?.[1];if(r&&i&&r===i)return e}}catch{}return null}function k(e){if(!e.startsWith(`data:image/svg+xml;base64,`))return null;try{let t=e.replace(`data:image/svg+xml;base64,`,``),n=decodeURIComponent(escape(atob(t))).match(/fill="([^"]+)"/);return n?n[1]:null}catch{return null}}var A={triangle:{points:3},square:{points:4},pentagon:{points:5},hexagon:{points:6},"star-4":{points:4,radius2:.4},"star-5":{points:5,radius2:.4},"star-6":{points:6,radius2:.5}};function j(e){if(!e)return`solid`;let t=e.join(`,`);for(let[e,n]of Object.entries(w))if(n&&n.join(`,`)===t)return e;return`custom`}function M(e,t){if(!e)return`triangle`;for(let[n,r]of Object.entries(A))if(r.points===e&&(r.radius2!==void 0&&t!==void 0||r.radius2===void 0&&t===void 0))return n;return`custom`}function N(e,t,r,i){let a=S(`stroke`,r),o=S(`fill`,r),s=S(`image`,r);return n`
        <div class="detail-panel">
            <h3>Edit Style: ${e}</h3>
            ${r.length>0?n`
                      <p class="geometry-types">
                          Geometry types: ${r.join(`, `)}
                      </p>
                  `:``}

            ${a?P(t,i):``}
            ${o?F(t,i):``}
            ${s?I(t,i):``}
        </div>
    `}function P(e,t){let r=j(e.stroke?.lineDash);return n`
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
                value="${r}"
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
    `}function F(e,t){return n`
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
    `}function I(e,t){let r=e.image?.type||`circle`;return n`
        <div class="form-section">
            <h4>Point Symbol</h4>
            <wa-select
                label="Symbol Type"
                value="${r}"
                @change=${e=>t.onImageTypeChange(e.target.value)}
            >
                <wa-option value="circle">Circle</wa-option>
                <wa-option value="regular-shape">Shape</wa-option>
                <wa-option value="icon">Icon</wa-option>
            </wa-select>

            ${r===`circle`?L(e,t):``}
            ${r===`regular-shape`?R(e,t):``}
            ${r===`icon`?B(e,t):``}

            ${e.image?V(e,t):``}
        </div>
    `}function L(e,t){return n`
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
    `}function R(e,t){let r=M(e.image?.points,e.image?.radius2),i=e.image?.radius2!==void 0;return n`
        <wa-divider></wa-divider>
        <wa-select
            label="Shape Preset"
            value="${r}"
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
            ?checked=${i}
            @change=${n=>{n.target.checked?t.onImageRadius2Change((e.image?.radius||10)*.4):t.onImageRadius2Change(void 0)}}
        >
            Star shape (inner radius)
        </wa-switch>
        ${i?n`
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
    `}function z(e,t=24){let n=e.trim();if(!n.startsWith(`<svg`)&&!n.startsWith(`<?xml`))throw Error(`Invalid SVG markup`);return n=n.replace(/<\?xml[^>]*\?>\s*/i,``),n.includes(`width=`)||(n=n.replace(`<svg`,`<svg width="${t}"`)),n.includes(`height=`)||(n=n.replace(`<svg`,`<svg height="${t}"`)),`data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(n)))}`}function B(e,t){let r=e.image?.src||``,i=r.startsWith(`data:`),a=i?O(r):null,o=a!==null,s=i&&!o,c=!i&&r.length>0,l=(i?k(r):null)||e.image?.color||E;if(!r){let e=D(`marker`,l);setTimeout(()=>t.onImageSrcChange(e),0),r=e,o=!0}let u=`marker`;return o&&a?u=a:o&&!a?u=`marker`:s?u=`paste-svg`:c&&(u=`custom-url`),n`
        <wa-divider></wa-divider>
        <wa-select
            label="Icon Source"
            value="${u}"
            @change=${e=>{let n=e.target.value;if(T[n]){let e=D(n,l);t.onImageSrcChange(e)}else (n===`paste-svg`||n===`custom-url`)&&t.onImageSrcChange(``)}}
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

        ${c||u===`custom-url`?n`
                  <wa-input
                      label="Icon URL"
                      value="${r}"
                      placeholder="https://example.com/icon.svg"
                      @input=${e=>t.onImageSrcChange(e.target.value)}
                  ></wa-input>
              `:``}

        ${u===`paste-svg`?n`
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

        ${o?n`
                  <wa-color-picker
                      label="Fill Color"
                      value="${l}"
                      opacity
                      size="small"
                      @change=${e=>{let n=a||u;if(T[n]){let r=D(n,e.target.value);t.onImageSrcChange(r)}}}
                  ></wa-color-picker>
              `:n`
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
    `}function V(e,t){let r=e.image?.type!==`icon`;return n`
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
        ${r?n`
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
    `}function H(e,t){return n`
        <div class="detail-panel">
            <h3>Edit Rule: ${e}</h3>

            ${U(t)}
            ${G(t)}
        </div>
    `}function U(e){return n`
        <div class="form-section">
            <h4>Condition</h4>
            ${e.condition.geometryType?n`
                      <wa-input
                          label="Geometry Type"
                          value="${Array.isArray(e.condition.geometryType)?e.condition.geometryType.join(`, `):e.condition.geometryType}"
                          readonly
                      ></wa-input>
                  `:``}
            ${e.condition.layerName?n`
                      <wa-input
                          label="Layer Name"
                          value="${e.condition.layerName}"
                          readonly
                      ></wa-input>
                  `:``}
            ${e.condition.property?W(e.condition.property):``}
        </div>
    `}function W(e){return n`
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
        ${e.value===void 0?``:n`
                  <wa-input
                      label="Value"
                      value="${e.value}"
                      readonly
                  ></wa-input>
              `}
    `}function G(e){return n`
        <div class="form-section">
            <h4>Style</h4>
            <wa-input
                label="Style ID"
                value="${e.styleId}"
                readonly
            ></wa-input>
        </div>
    `}function K(e,t,n,r){let i=e[t];if(!i)return null;let a=i;for(let e=0;e<n.length-1;e++){let t=n[e];a[t]||(a[t]={}),a=a[t]}let o=n[n.length-1];return a[o]===r?null:(r===void 0?delete a[o]:a[o]=r,{...e})}function q(e){return{onStrokeColorChange:t=>e([`stroke`,`color`],t),onStrokeWidthChange:t=>e([`stroke`,`width`],t),onStrokeLineDashChange:t=>e([`stroke`,`lineDash`],t),onStrokeLineCapChange:t=>e([`stroke`,`lineCap`],t),onStrokeLineJoinChange:t=>e([`stroke`,`lineJoin`],t),onFillColorChange:t=>e([`fill`,`color`],t),onImageTypeChange:t=>e([`image`,`type`],t),onImageRotationChange:t=>e([`image`,`rotation`],t),onImageOpacityChange:t=>e([`image`,`opacity`],t),onImageScaleChange:t=>e([`image`,`scale`],t),onImageRadiusChange:t=>e([`image`,`radius`],t),onImageFillColorChange:t=>e([`image`,`fill`,`color`],t),onImageStrokeColorChange:t=>e([`image`,`stroke`,`color`],t),onImageStrokeWidthChange:t=>e([`image`,`stroke`,`width`],t),onImageSrcChange:t=>e([`image`,`src`],t),onImageColorChange:t=>e([`image`,`color`],t),onImageAnchorChange:t=>e([`image`,`anchor`],t),onImagePointsChange:t=>e([`image`,`points`],t),onImageRadius2Change:t=>e([`image`,`radius2`],t),onImageAngleChange:t=>e([`image`,`angle`],t)}}var J=class extends e{constructor(...e){super(...e),this.open=!1,this.handleDialogHide=e=>{e.target.tagName.toLowerCase()===`wa-dialog`&&this.hide()},this.handleCancel=()=>{this.hide()},this.handleSave=()=>{this.gsMap&&this.workingStyles&&this.workingRules&&(this.gsMap.styles=this.workingStyles,this.gsMap.styleRules=this.workingRules),this.onSave?.(),this.hide()},this.handleAddStyle=()=>{console.log(`Add style`)},this.handleAddRule=()=>{console.log(`Add rule`)}}static{this.styles=f}show(e){this.onSave=e,this.gsMap&&(this.workingStyles=JSON.parse(JSON.stringify(this.gsMap.styles||{})),this.workingRules=JSON.parse(JSON.stringify(this.gsMap.styleRules||[]))),this.open=!0,this.requestUpdate()}hide(){this.open=!1,this.selectedStyleId=void 0,this.selectedRuleId=void 0,this.workingStyles=void 0,this.workingRules=void 0,this.gsMap=void 0,this.requestUpdate()}render(){return this.open?n`
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
        `:null}renderStylesTab(){return n`
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
        `}renderStylesTree(){return!this.workingStyles||Object.keys(this.workingStyles).length===0?n`<p class="empty-message">No styles available</p>`:n`
            <wa-tree selection="single" class="style-tree">
                ${Object.entries(this.workingStyles).map(([e])=>this.renderStyleTreeItem(e))}
            </wa-tree>
        `}renderStyleTreeItem(e){let t=this.workingStyles[e];return n`
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
        `}renderSelectedStyleDetail(){if(!this.selectedStyleId||!this.workingStyles?.[this.selectedStyleId])return n`
                <div class="detail-panel empty">
                    <p>Select a style to edit</p>
                </div>
            `;let e=this.workingStyles[this.selectedStyleId],t=v(this.selectedStyleId,this.workingRules||[]),r=q((e,t)=>this.updateStyleProperty(e,t));return N(this.selectedStyleId,e,t,r)}renderRulesTab(){return n`
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
        `}renderRulesTree(){return!this.workingRules||this.workingRules.length===0?n`<p class="empty-message">No rules available</p>`:n`
            <wa-tree selection="single" class="rule-tree">
                ${this.workingRules.map((e,t)=>this.renderRuleTreeItem(e,t))}
            </wa-tree>
        `}renderRuleTreeItem(e,t){let r=e.id||`rule-${t}`;return n`
            <wa-tree-item
                ?selected=${this.selectedRuleId===r}
                @click=${()=>this.handleRuleSelect(r)}
            >
                <div class="tree-item-content">
                    <wa-icon
                        name="code-branch"
                        variant="regular"
                    ></wa-icon>
                    <span class="rule-id">${r}</span>
                    <span class="rule-summary"
                        >${C(e)} →
                        ${e.styleId}</span
                    >
                    <wa-icon-button
                        name="trash"
                        size="small"
                        @click=${e=>this.handleDeleteRule(e,r)}
                    ></wa-icon-button>
                </div>
            </wa-tree-item>
        `}renderSelectedRuleDetail(){if(!this.selectedRuleId||!this.workingRules)return n`
                <div class="detail-panel empty">
                    <p>Select a rule to edit</p>
                </div>
            `;let e=this.workingRules.find((e,t)=>(e.id||`rule-${t}`)===this.selectedRuleId);return e?H(this.selectedRuleId,e):n`
                <div class="detail-panel empty">
                    <p>Select a rule to edit</p>
                </div>
            `}handleStyleSelect(e){this.selectedStyleId!==e&&(this.selectedStyleId=e,this.requestUpdate())}handleRuleSelect(e){this.selectedRuleId!==e&&(this.selectedRuleId=e,this.requestUpdate())}handleDeleteStyle(e,t){e.stopPropagation(),this.workingStyles&&confirm(`Delete style "${t}"?`)&&(delete this.workingStyles[t],this.selectedStyleId===t&&(this.selectedStyleId=void 0),this.workingStyles={...this.workingStyles})}handleDeleteRule(e,t){if(e.stopPropagation(),!this.workingRules)return;let n=this.workingRules.findIndex((e,n)=>(e.id||`rule-${n}`)===t);n!==-1&&confirm(`Delete rule "${t}"?`)&&(this.workingRules.splice(n,1),this.selectedRuleId===t&&(this.selectedRuleId=void 0),this.workingRules=[...this.workingRules])}updateStyleProperty(e,t){if(!this.selectedStyleId||!this.workingStyles)return;let n=K(this.workingStyles,this.selectedStyleId,e,t);n&&(this.workingStyles=n)}};s([a({type:Object})],J.prototype,`gsMap`,void 0),s([a({type:Boolean})],J.prototype,`open`,void 0),s([r()],J.prototype,`selectedStyleId`,void 0),s([r()],J.prototype,`selectedRuleId`,void 0),s([r()],J.prototype,`workingStyles`,void 0),s([r()],J.prototype,`workingRules`,void 0),J=s([i(`gs-style-editor`)],J);var Y=({commandRegistry:e})=>{e.registerAll({command:{id:`edit_styles`,name:`Edit Styles`,description:`Opens the style editor to define and edit map styles and rules`,parameters:[]},handler:{execute:async e=>{let t=c.get();if(!(t instanceof d)){o(`No active map editor`);return}let n=t.getGsMap();if(!n){o(`Map not initialized`);return}let r=document.querySelector(`gs-style-editor`);r||(r=new J,document.body.appendChild(r)),r.gsMap=n,await r.updateComplete,r.show(()=>{t.markDirty(!0),t.refresh(),l(`Styles updated`)})}},contribution:{target:`toolbar:map-editor`,icon:`palette`,label:`Edit Styles`,disabled:()=>!(c.get()instanceof d)}})};export{Y as default};