import{f as b,G as C,b as x,a as D}from"./geospace-app-_fmR7Mi1.js";import{A as T,x as r,a5 as w,z as O,E as I,M as y,I as L}from"./index-CUNXveE1.js";import"./preload-helper-WQhrSmCl.js";import"./chunk.RRCUZAZD-5O78oK5S.js";import"./chunk.LTSJC6DR-BTS7fm5P.js";const F=T`
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
`;function A(e){const t=e.stroke?.color||"transparent",a=e.fill?.color||"transparent",i=Math.min(e.stroke?.width||1,5),o=e.stroke?.lineDash?.join(" ")||"none",n=e.stroke?.lineCap||"round",l=e.stroke?.lineJoin||"round";return e.image?.type==="circle"?E(e,t,a,i):e.image?.type==="regular-shape"?j(e,t,a,i):e.image?.type==="icon"?z(e):r`
        <svg width="40" height="40" viewBox="0 0 40 40">
            <rect 
                x="5" 
                y="5" 
                width="30" 
                height="30" 
                fill="${a}" 
                stroke="${t}" 
                stroke-width="${i}"
                stroke-dasharray="${o}"
                stroke-linecap="${n}"
                stroke-linejoin="${l}"
            />
        </svg>
    `}function E(e,t,a,i){const o=Math.min(e.image?.radius||5,15),n=e.image?.fill?.color||a,l=e.image?.stroke?.color||t,u=Math.min(e.image?.stroke?.width||i,3),c=e.image?.opacity??1,d=(e.image?.rotation||0)*(180/Math.PI),p=e.image?.scale||1;return r`
        <svg width="40" height="40" viewBox="0 0 40 40">
            <circle 
                cx="20" 
                cy="20" 
                r="${o*p}" 
                fill="${n}" 
                stroke="${l}" 
                stroke-width="${u}"
                opacity="${c}"
                transform="rotate(${d}, 20, 20)"
            />
        </svg>
    `}function j(e,t,a,i){const o=e.image?.points||5,n=Math.min(e.image?.radius||10,15),l=e.image?.fill?.color||a,u=e.image?.stroke?.color||t,c=Math.min(e.image?.stroke?.width||i,3),d=e.image?.opacity??1,p=((e.image?.rotation||0)+(e.image?.angle||0))*(180/Math.PI),s=q(20,20,n,o,e.image?.radius2);return r`
        <svg width="40" height="40" viewBox="0 0 40 40">
            <polygon 
                points="${s}" 
                fill="${l}" 
                stroke="${u}" 
                stroke-width="${c}"
                opacity="${d}"
                transform="rotate(${p}, 20, 20)"
            />
        </svg>
    `}function z(e){const t=e.image?.src,a=e.image?.color||"#0064ff",i=e.image?.opacity??1,o=(e.image?.rotation||0)*(180/Math.PI),n=e.image?.scale||1;return t?t.startsWith("data:image/svg+xml")?r`
            <div style="
                width: 40px; 
                height: 40px; 
                display: flex; 
                align-items: center; 
                justify-content: center;
                color: ${a};
                opacity: ${i};
                transform: rotate(${o}deg) scale(${n});
            ">
                <img 
                    src="${t}" 
                    width="24" 
                    height="24" 
                    style="filter: drop-shadow(0 0 0 ${a});"
                    alt="icon"
                />
            </div>
        `:r`
        <div style="
            width: 40px; 
            height: 40px; 
            display: flex; 
            align-items: center; 
            justify-content: center;
            opacity: ${i};
            transform: rotate(${o}deg) scale(${n});
        ">
            <img 
                src="${t}" 
                width="24" 
                height="24" 
                alt="icon"
                style="object-fit: contain;"
                @error=${l=>{const u=l.target;u.style.display="none"}}
            />
        </div>
    `:r`
            <svg width="40" height="40" viewBox="0 0 40 40">
                <rect x="8" y="8" width="24" height="24" fill="none" stroke="${a}" stroke-width="2" stroke-dasharray="4 2" opacity="${i}" />
                <text x="20" y="24" text-anchor="middle" font-size="12" fill="${a}" opacity="${i}">?</text>
            </svg>
        `}function q(e,t,a,i,o){const n=[],l=2*Math.PI/i,u=-Math.PI/2;if(o!==void 0)for(let c=0;c<i*2;c++){const d=c%2===0?a:o,p=u+c*l/2,s=e+d*Math.cos(p),g=t+d*Math.sin(p);n.push(`${s},${g}`)}else for(let c=0;c<i;c++){const d=u+c*l,p=e+a*Math.cos(d),s=t+a*Math.sin(d);n.push(`${p},${s}`)}return n.join(" ")}function U(e,t){const a=new Set;for(const i of t)i.styleId===e&&i.condition.geometryType&&(Array.isArray(i.condition.geometryType)?i.condition.geometryType:[i.condition.geometryType]).forEach(n=>a.add(n));return Array.from(a)}function W(e){return e.some(t=>t===w.Point||t===w.MultiPoint)}function G(e){return e.some(t=>t===w.LineString||t===w.MultiLineString)}function N(e){return e.some(t=>t===w.Polygon||t===w.MultiPolygon||t===w.Circle)}function S(e,t){if(t.length===0)return!0;const a=W(t),i=G(t),o=N(t);switch(e){case"stroke":return i||o;case"fill":return o;case"image":return a||i||o;default:return!0}}function V(e){const t=[];if(e.condition.geometryType){const a=Array.isArray(e.condition.geometryType)?e.condition.geometryType:[e.condition.geometryType];t.push(`Type: ${a.join(", ")}`)}if(e.condition.layerName&&t.push(`Layer: ${e.condition.layerName}`),e.condition.property){const a=e.condition.property;t.push(`${a.key} ${a.operator||"exists"} ${a.value||""}`)}return t.join(" | ")||"All features"}const R={solid:void 0,dashed:[10,5],dotted:[2,5],"dash-dot":[10,5,2,5],"long-dash":[20,10]},f={marker:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="{{COLOR}}" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>',pin:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="{{COLOR}}" d="M16 12V4h1V2H7v2h1v8l-2 2v2h5.2v6h1.6v-6H18v-2l-2-2z"/></svg>',flag:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="{{COLOR}}" d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"/></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="{{COLOR}}" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>',cross:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="{{COLOR}}" d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"/></svg>'},k="#0064ff";function $(e,t=k){const a=f[e];if(!a)return"";const i=a.replace(/\{\{COLOR\}\}/g,t);return M(i,24)}function H(e){if(!e.startsWith("data:image/svg+xml;base64,"))return null;try{const t=e.replace("data:image/svg+xml;base64,",""),a=decodeURIComponent(escape(atob(t)));for(const[i,o]of Object.entries(f)){const n=o.match(/d="([^"]+)"/)?.[1],l=a.match(/d="([^"]+)"/)?.[1];if(n&&l&&n===l)return i}}catch{}return null}function _(e){if(!e.startsWith("data:image/svg+xml;base64,"))return null;try{const t=e.replace("data:image/svg+xml;base64,",""),i=decodeURIComponent(escape(atob(t))).match(/fill="([^"]+)"/);return i?i[1]:null}catch{return null}}const P={triangle:{points:3},square:{points:4},pentagon:{points:5},hexagon:{points:6},"star-4":{points:4,radius2:.4},"star-5":{points:5,radius2:.4},"star-6":{points:6,radius2:.5}};function B(e){if(!e)return"solid";const t=e.join(",");for(const[a,i]of Object.entries(R))if(i&&i.join(",")===t)return a;return"custom"}function J(e,t){if(!e)return"triangle";for(const[a,i]of Object.entries(P))if(i.points===e){if(i.radius2!==void 0&&t!==void 0)return a;if(i.radius2===void 0&&t===void 0)return a}return"custom"}function K(e,t,a,i){const o=S("stroke",a),n=S("fill",a),l=S("image",a);return r`
        <div class="detail-panel">
            <h3>Edit Style: ${e}</h3>
            ${a.length>0?r`
                <p class="geometry-types">Geometry types: ${a.join(", ")}</p>
            `:""}
            
            ${o?Z(t,i):""}
            ${n?Q(t,i):""}
            ${l?X(t,i):""}
        </div>
    `}function Z(e,t){const a=B(e.stroke?.lineDash);return r`
        <div class="form-section">
            <h4>Stroke</h4>
            <wa-color-picker 
                label="Color" 
                value="${e.stroke?.color||"#000000"}"
                opacity
                size="small"
                @change=${i=>t.onStrokeColorChange(i.target.value)}
            ></wa-color-picker>
            <wa-input 
                type="number" 
                label="Width" 
                value="${e.stroke?.width||""}"
                min="0"
                step="0.5"
                @input=${i=>t.onStrokeWidthChange(parseFloat(i.target.value))}
            ></wa-input>
            <wa-select 
                label="Line Style"
                value="${a}"
                @change=${i=>t.onStrokeLineDashChange(R[i.target.value])}
            >
                <wa-option value="solid">Solid</wa-option>
                <wa-option value="dashed">Dashed</wa-option>
                <wa-option value="dotted">Dotted</wa-option>
                <wa-option value="dash-dot">Dash-Dot</wa-option>
                <wa-option value="long-dash">Long Dash</wa-option>
            </wa-select>
            <wa-select 
                label="Line Cap"
                value="${e.stroke?.lineCap||"round"}"
                @change=${i=>t.onStrokeLineCapChange(i.target.value)}
            >
                <wa-option value="butt">Butt</wa-option>
                <wa-option value="round">Round</wa-option>
                <wa-option value="square">Square</wa-option>
            </wa-select>
            <wa-select 
                label="Line Join"
                value="${e.stroke?.lineJoin||"round"}"
                @change=${i=>t.onStrokeLineJoinChange(i.target.value)}
            >
                <wa-option value="bevel">Bevel</wa-option>
                <wa-option value="round">Round</wa-option>
                <wa-option value="miter">Miter</wa-option>
            </wa-select>
        </div>
    `}function Q(e,t){return r`
        <div class="form-section">
            <h4>Fill</h4>
            <wa-color-picker 
                label="Color" 
                value="${e.fill?.color||"#000000"}"
                opacity
                size="small"
                @change=${a=>t.onFillColorChange(a.target.value)}
            ></wa-color-picker>
        </div>
    `}function X(e,t){const a=e.image?.type||"circle";return r`
        <div class="form-section">
            <h4>Point Symbol</h4>
            <wa-select 
                label="Symbol Type"
                value="${a}"
                @change=${i=>t.onImageTypeChange(i.target.value)}
            >
                <wa-option value="circle">Circle</wa-option>
                <wa-option value="regular-shape">Shape</wa-option>
                <wa-option value="icon">Icon</wa-option>
            </wa-select>
            
            ${a==="circle"?Y(e,t):""}
            ${a==="regular-shape"?ee(e,t):""}
            ${a==="icon"?te(e,t):""}
            
            ${e.image?ae(e,t):""}
        </div>
    `}function Y(e,t){return r`
        <wa-divider></wa-divider>
        <wa-input 
            type="number" 
            label="Radius" 
            value="${e.image?.radius||5}"
            min="1"
            step="1"
            @input=${a=>t.onImageRadiusChange(parseFloat(a.target.value))}
        ></wa-input>
        <wa-color-picker 
            label="Fill Color" 
            value="${e.image?.fill?.color||"#0064ff"}"
            opacity
            size="small"
            @change=${a=>t.onImageFillColorChange(a.target.value)}
        ></wa-color-picker>
        <wa-color-picker 
            label="Stroke Color" 
            value="${e.image?.stroke?.color||"#ffffff"}"
            opacity
            size="small"
            @change=${a=>t.onImageStrokeColorChange(a.target.value)}
        ></wa-color-picker>
        <wa-input 
            type="number" 
            label="Stroke Width" 
            value="${e.image?.stroke?.width||2}"
            min="0"
            step="0.5"
            @input=${a=>t.onImageStrokeWidthChange(parseFloat(a.target.value))}
        ></wa-input>
    `}function ee(e,t){const a=J(e.image?.points,e.image?.radius2),i=e.image?.radius2!==void 0;return r`
        <wa-divider></wa-divider>
        <wa-select 
            label="Shape Preset"
            value="${a}"
            @change=${o=>{const n=P[o.target.value];n&&(t.onImagePointsChange(n.points),t.onImageRadius2Change(n.radius2!==void 0?n.radius2*(e.image?.radius||10):void 0))}}
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
            @input=${o=>t.onImagePointsChange(parseInt(o.target.value))}
        ></wa-input>
        <wa-input 
            type="number" 
            label="Outer Radius" 
            value="${e.image?.radius||10}"
            min="1"
            step="1"
            @input=${o=>t.onImageRadiusChange(parseFloat(o.target.value))}
        ></wa-input>
        <wa-switch 
            ?checked=${i}
            @change=${o=>{o.target.checked?t.onImageRadius2Change((e.image?.radius||10)*.4):t.onImageRadius2Change(void 0)}}
        >Star shape (inner radius)</wa-switch>
        ${i?r`
            <wa-input 
                type="number" 
                label="Inner Radius" 
                value="${e.image?.radius2||4}"
                min="1"
                step="1"
                @input=${o=>t.onImageRadius2Change(parseFloat(o.target.value))}
            ></wa-input>
        `:""}
        <wa-input 
            type="number" 
            label="Angle (degrees)" 
            value="${(e.image?.angle||0)*180/Math.PI}"
            step="15"
            @input=${o=>t.onImageAngleChange(parseFloat(o.target.value)*Math.PI/180)}
        ></wa-input>
        <wa-color-picker 
            label="Fill Color" 
            value="${e.image?.fill?.color||"#0064ff"}"
            opacity
            size="small"
            @change=${o=>t.onImageFillColorChange(o.target.value)}
        ></wa-color-picker>
        <wa-color-picker 
            label="Stroke Color" 
            value="${e.image?.stroke?.color||"#ffffff"}"
            opacity
            size="small"
            @change=${o=>t.onImageStrokeColorChange(o.target.value)}
        ></wa-color-picker>
        <wa-input 
            type="number" 
            label="Stroke Width" 
            value="${e.image?.stroke?.width||2}"
            min="0"
            step="0.5"
            @input=${o=>t.onImageStrokeWidthChange(parseFloat(o.target.value))}
        ></wa-input>
    `}function M(e,t=24){let a=e.trim();if(!a.startsWith("<svg")&&!a.startsWith("<?xml"))throw new Error("Invalid SVG markup");return a=a.replace(/<\?xml[^>]*\?>\s*/i,""),a.includes("width=")||(a=a.replace("<svg",`<svg width="${t}"`)),a.includes("height=")||(a=a.replace("<svg",`<svg height="${t}"`)),`data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(a)))}`}function te(e,t){let a=e.image?.src||"";const i=a.startsWith("data:"),o=i?H(a):null;let n=o!==null;const l=i&&!n,u=!i&&a.length>0,d=(i?_(a):null)||e.image?.color||k;if(!a){const s=$("marker",d);setTimeout(()=>t.onImageSrcChange(s),0),a=s,n=!0}let p="marker";return n&&o?p=o:n&&!o?p="marker":l?p="paste-svg":u&&(p="custom-url"),r`
        <wa-divider></wa-divider>
        <wa-select 
            label="Icon Source"
            value="${p}"
            @change=${s=>{const g=s.target.value;if(f[g]){const m=$(g,d);t.onImageSrcChange(m)}else(g==="paste-svg"||g==="custom-url")&&t.onImageSrcChange("")}}
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
        
        ${u||p==="custom-url"?r`
            <wa-input 
                label="Icon URL" 
                value="${a}"
                placeholder="https://example.com/icon.svg"
                @input=${s=>t.onImageSrcChange(s.target.value)}
            ></wa-input>
        `:""}
        
        ${p==="paste-svg"?r`
            <wa-textarea 
                label="Paste SVG Code"
                placeholder="<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 24 24&quot;>...</svg>"
                rows="4"
                @input=${s=>{const g=s.target.value.trim();if(g&&g.startsWith("<svg"))try{const m=M(g,24);t.onImageSrcChange(m)}catch(m){console.warn("Invalid SVG:",m)}}}
            ></wa-textarea>
            <p class="help-text">Paste SVG markup. Width/height will be set to 24px automatically.</p>
        `:""}
        
        ${n?r`
            <wa-color-picker 
                label="Fill Color" 
                value="${d}"
                opacity
                size="small"
                @change=${s=>{const g=o||p;if(f[g]){const m=$(g,s.target.value);t.onImageSrcChange(m)}}}
            ></wa-color-picker>
        `:r`
            <wa-color-picker 
                label="Tint Color" 
                value="${e.image?.color||k}"
                opacity
                size="small"
                @change=${s=>t.onImageColorChange(s.target.value)}
            ></wa-color-picker>
            <p class="help-text">Tint only works with some image formats.</p>
        `}
        
        <wa-input 
            type="number" 
            label="Scale" 
            value="${e.image?.scale||1}"
            min="0.1"
            max="10"
            step="0.1"
            @input=${s=>t.onImageScaleChange(parseFloat(s.target.value))}
        ></wa-input>
    `}function ae(e,t){const a=e.image?.type!=="icon";return r`
        <wa-divider></wa-divider>
        <wa-input 
            type="number" 
            label="Rotation (degrees)" 
            value="${(e.image?.rotation||0)*(180/Math.PI)}"
            step="15"
            @input=${i=>t.onImageRotationChange(parseFloat(i.target.value)*(Math.PI/180))}
        ></wa-input>
        <wa-slider 
            label="Opacity"
            value="${(e.image?.opacity??1)*100}"
            min="0"
            max="100"
            step="5"
            @change=${i=>t.onImageOpacityChange(i.target.value/100)}
        ></wa-slider>
        ${a?r`
            <wa-input 
                type="number" 
                label="Scale" 
                value="${e.image?.scale||1}"
                min="0.1"
                max="10"
                step="0.1"
                @input=${i=>t.onImageScaleChange(parseFloat(i.target.value))}
            ></wa-input>
        `:""}
    `}function ie(e,t){return r`
        <div class="detail-panel">
            <h3>Edit Rule: ${e}</h3>
            
            ${oe(t)}
            ${re(t)}
        </div>
    `}function oe(e){return r`
        <div class="form-section">
            <h4>Condition</h4>
            ${e.condition.geometryType?r`
                <wa-input 
                    label="Geometry Type" 
                    value="${Array.isArray(e.condition.geometryType)?e.condition.geometryType.join(", "):e.condition.geometryType}"
                    readonly
                ></wa-input>
            `:""}
            ${e.condition.layerName?r`
                <wa-input 
                    label="Layer Name" 
                    value="${e.condition.layerName}"
                    readonly
                ></wa-input>
            `:""}
            ${e.condition.property?ne(e.condition.property):""}
        </div>
    `}function ne(e){return r`
        <wa-input 
            label="Property Key" 
            value="${e.key}"
            readonly
        ></wa-input>
        <wa-input 
            label="Operator" 
            value="${e.operator||"exists"}"
            readonly
        ></wa-input>
        ${e.value!==void 0?r`
            <wa-input 
                label="Value" 
                value="${e.value}"
                readonly
            ></wa-input>
        `:""}
    `}function re(e){return r`
        <div class="form-section">
            <h4>Style</h4>
            <wa-input 
                label="Style ID" 
                value="${e.styleId}"
                readonly
            ></wa-input>
        </div>
    `}function le(e,t,a,i){const o=e[t];if(!o)return null;let n=o;for(let c=0;c<a.length-1;c++){const d=a[c];n[d]||(n[d]={}),n=n[d]}const l=a[a.length-1];return n[l]===i?null:(i===void 0?delete n[l]:n[l]=i,{...e})}function se(e){return{onStrokeColorChange:t=>e(["stroke","color"],t),onStrokeWidthChange:t=>e(["stroke","width"],t),onStrokeLineDashChange:t=>e(["stroke","lineDash"],t),onStrokeLineCapChange:t=>e(["stroke","lineCap"],t),onStrokeLineJoinChange:t=>e(["stroke","lineJoin"],t),onFillColorChange:t=>e(["fill","color"],t),onImageTypeChange:t=>e(["image","type"],t),onImageRotationChange:t=>e(["image","rotation"],t),onImageOpacityChange:t=>e(["image","opacity"],t),onImageScaleChange:t=>e(["image","scale"],t),onImageRadiusChange:t=>e(["image","radius"],t),onImageFillColorChange:t=>e(["image","fill","color"],t),onImageStrokeColorChange:t=>e(["image","stroke","color"],t),onImageStrokeWidthChange:t=>e(["image","stroke","width"],t),onImageSrcChange:t=>e(["image","src"],t),onImageColorChange:t=>e(["image","color"],t),onImageAnchorChange:t=>e(["image","anchor"],t),onImagePointsChange:t=>e(["image","points"],t),onImageRadius2Change:t=>e(["image","radius2"],t),onImageAngleChange:t=>e(["image","angle"],t)}}var ce=Object.defineProperty,de=Object.getOwnPropertyDescriptor,v=(e,t,a,i)=>{for(var o=i>1?void 0:i?de(t,a):t,n=e.length-1,l;n>=0;n--)(l=e[n])&&(o=(i?l(t,a,o):l(o))||o);return i&&o&&ce(t,a,o),o};let h=class extends O{constructor(){super(...arguments),this.open=!1,this.handleDialogHide=e=>{e.target.tagName.toLowerCase()==="wa-dialog"&&this.hide()},this.handleCancel=()=>{this.hide()},this.handleSave=()=>{this.gsMap&&this.workingStyles&&this.workingRules&&(this.gsMap.styles=this.workingStyles,this.gsMap.styleRules=this.workingRules),this.onSave?.(),this.hide()},this.handleAddStyle=()=>{console.log("Add style")},this.handleAddRule=()=>{console.log("Add rule")}}show(e){this.onSave=e,this.gsMap&&(this.workingStyles=JSON.parse(JSON.stringify(this.gsMap.styles||{})),this.workingRules=JSON.parse(JSON.stringify(this.gsMap.styleRules||[]))),this.open=!0,this.requestUpdate()}hide(){this.open=!1,this.selectedStyleId=void 0,this.selectedRuleId=void 0,this.workingStyles=void 0,this.workingRules=void 0,this.gsMap=void 0,this.requestUpdate()}render(){return this.open?r`
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
                    <wa-button variant="primary" @click=${this.handleSave}>Save</wa-button>
                </div>
            </wa-dialog>
        `:null}renderStylesTab(){return r`
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
        `}renderStylesTree(){return!this.workingStyles||Object.keys(this.workingStyles).length===0?r`<p class="empty-message">No styles available</p>`:r`
            <wa-tree selection="single" class="style-tree">
                ${Object.entries(this.workingStyles).map(([e])=>this.renderStyleTreeItem(e))}
            </wa-tree>
        `}renderStyleTreeItem(e){const t=this.workingStyles[e];return r`
            <wa-tree-item 
                ?selected=${this.selectedStyleId===e}
                @click=${a=>{a.stopPropagation(),this.handleStyleSelect(e)}}
            >
                <div class="tree-item-content">
                    <div class="style-preview-small">
                        ${A(t)}
                    </div>
                    <span class="style-id">${e}</span>
                    <wa-icon-button 
                        name="trash" 
                        size="small"
                        @click=${a=>this.handleDeleteStyle(a,e)}
                    ></wa-icon-button>
                </div>
            </wa-tree-item>
        `}renderSelectedStyleDetail(){if(!this.selectedStyleId||!this.workingStyles?.[this.selectedStyleId])return r`
                <div class="detail-panel empty">
                    <p>Select a style to edit</p>
                </div>
            `;const e=this.workingStyles[this.selectedStyleId],t=U(this.selectedStyleId,this.workingRules||[]),a=se((i,o)=>this.updateStyleProperty(i,o));return K(this.selectedStyleId,e,t,a)}renderRulesTab(){return r`
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
        `}renderRulesTree(){return!this.workingRules||this.workingRules.length===0?r`<p class="empty-message">No rules available</p>`:r`
            <wa-tree selection="single" class="rule-tree">
                ${this.workingRules.map((e,t)=>this.renderRuleTreeItem(e,t))}
            </wa-tree>
        `}renderRuleTreeItem(e,t){const a=e.id||`rule-${t}`;return r`
            <wa-tree-item 
                ?selected=${this.selectedRuleId===a}
                @click=${()=>this.handleRuleSelect(a)}
            >
                <div class="tree-item-content">
                    <wa-icon name="code-branch" variant="regular"></wa-icon>
                    <span class="rule-id">${a}</span>
                    <span class="rule-summary">${V(e)} → ${e.styleId}</span>
                    <wa-icon-button 
                        name="trash" 
                        size="small"
                        @click=${i=>this.handleDeleteRule(i,a)}
                    ></wa-icon-button>
                </div>
            </wa-tree-item>
        `}renderSelectedRuleDetail(){if(!this.selectedRuleId||!this.workingRules)return r`
                <div class="detail-panel empty">
                    <p>Select a rule to edit</p>
                </div>
            `;const e=this.workingRules.find((t,a)=>(t.id||`rule-${a}`)===this.selectedRuleId);return e?ie(this.selectedRuleId,e):r`
                <div class="detail-panel empty">
                    <p>Select a rule to edit</p>
                </div>
            `}handleStyleSelect(e){this.selectedStyleId!==e&&(this.selectedStyleId=e,this.requestUpdate())}handleRuleSelect(e){this.selectedRuleId!==e&&(this.selectedRuleId=e,this.requestUpdate())}handleDeleteStyle(e,t){e.stopPropagation(),this.workingStyles&&confirm(`Delete style "${t}"?`)&&(delete this.workingStyles[t],this.selectedStyleId===t&&(this.selectedStyleId=void 0),this.workingStyles={...this.workingStyles})}handleDeleteRule(e,t){if(e.stopPropagation(),!this.workingRules)return;const a=this.workingRules.findIndex((i,o)=>(i.id||`rule-${o}`)===t);a!==-1&&confirm(`Delete rule "${t}"?`)&&(this.workingRules.splice(a,1),this.selectedRuleId===t&&(this.selectedRuleId=void 0),this.workingRules=[...this.workingRules])}updateStyleProperty(e,t){if(!this.selectedStyleId||!this.workingStyles)return;const a=le(this.workingStyles,this.selectedStyleId,e,t);a&&(this.workingStyles=a)}};h.styles=F;v([I({type:Object})],h.prototype,"gsMap",2);v([I({type:Boolean})],h.prototype,"open",2);v([y()],h.prototype,"selectedStyleId",2);v([y()],h.prototype,"selectedRuleId",2);v([y()],h.prototype,"workingStyles",2);v([y()],h.prototype,"workingRules",2);h=v([L("gs-style-editor")],h);const we=({commandRegistry:e})=>{e.registerAll({command:{id:"edit_styles",name:"Edit Styles",description:"Opens the style editor to define and edit map styles and rules",parameters:[]},handler:{execute:async t=>{const a=b.get();if(!(a instanceof C)){x("No active map editor");return}const i=a.getGsMap();if(!i){x("Map not initialized");return}let o=document.querySelector("gs-style-editor");o||(o=new h,document.body.appendChild(o)),o.gsMap=i,await o.updateComplete,o.show(()=>{a.markDirty(!0),a.refresh(),D("Styles updated")})}},contribution:{target:"toolbar:map-editor",icon:"palette",label:"Edit Styles",disabled:()=>!(b.get()instanceof C)}})};export{we as default};
