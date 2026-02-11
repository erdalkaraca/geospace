import { html } from "@kispace-io/core/externals/lit";
import { GsStyle, GsGeometryType } from "@kispace-io/gs-lib";
import { shouldShowProperty } from "../utils/geometry-utils";

export interface StyleUpdateHandlers {
    onStrokeColorChange: (value: string) => void;
    onStrokeWidthChange: (value: number) => void;
    onStrokeLineDashChange: (value: number[] | undefined) => void;
    onStrokeLineCapChange: (value: string) => void;
    onStrokeLineJoinChange: (value: string) => void;
    onFillColorChange: (value: string) => void;
    onImageTypeChange: (
        value: "circle" | "icon" | "regular-shape"
    ) => void;
    onImageRotationChange: (value: number) => void;
    onImageOpacityChange: (value: number) => void;
    onImageScaleChange: (value: number) => void;
    onImageRadiusChange: (value: number) => void;
    onImageFillColorChange: (value: string) => void;
    onImageStrokeColorChange: (value: string) => void;
    onImageStrokeWidthChange: (value: number) => void;
    onImageSrcChange: (value: string) => void;
    onImageColorChange: (value: string) => void;
    onImageAnchorChange: (value: [number, number]) => void;
    onImagePointsChange: (value: number) => void;
    onImageRadius2Change: (value: number | undefined) => void;
    onImageAngleChange: (value: number) => void;
}

const LINE_DASH_PRESETS: Record<string, number[] | undefined> = {
    solid: undefined,
    dashed: [10, 5],
    dotted: [2, 5],
    "dash-dot": [10, 5, 2, 5],
    "long-dash": [20, 10],
};

const ICON_SVG_TEMPLATES: Record<string, string> = {
    marker:
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="{{COLOR}}" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>',
    pin: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="{{COLOR}}" d="M16 12V4h1V2H7v2h1v8l-2 2v2h5.2v6h1.6v-6H18v-2l-2-2z"/></svg>',
    flag: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="{{COLOR}}" d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"/></svg>',
    star: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="{{COLOR}}" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>',
    cross: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="{{COLOR}}" d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"/></svg>',
};

const DEFAULT_ICON_COLOR = "#0064ff";

function generateIconDataUri(
    templateName: string,
    color: string = DEFAULT_ICON_COLOR
): string {
    const template = ICON_SVG_TEMPLATES[templateName];
    if (!template) return "";
    const svg = template.replace(/\{\{COLOR\}\}/g, color);
    return svgToDataUri(svg, 24);
}

function detectPresetFromDataUri(dataUri: string): string | null {
    if (!dataUri.startsWith("data:image/svg+xml;base64,")) return null;

    try {
        const base64 = dataUri.replace("data:image/svg+xml;base64,", "");
        const svg = decodeURIComponent(escape(atob(base64)));

        for (const [name, template] of Object.entries(ICON_SVG_TEMPLATES)) {
            const templatePath = template.match(/d="([^"]+)"/)?.[1];
            const svgPath = svg.match(/d="([^"]+)"/)?.[1];
            if (templatePath && svgPath && templatePath === svgPath) {
                return name;
            }
        }
    } catch {
        // invalid base64 or encoding
    }
    return null;
}

function extractColorFromDataUri(dataUri: string): string | null {
    if (!dataUri.startsWith("data:image/svg+xml;base64,")) return null;

    try {
        const base64 = dataUri.replace("data:image/svg+xml;base64,", "");
        const svg = decodeURIComponent(escape(atob(base64)));
        const match = svg.match(/fill="([^"]+)"/);
        return match ? match[1] : null;
    } catch {
        return null;
    }
}

const SHAPE_PRESETS: Record<string, { points: number; radius2?: number }> = {
    triangle: { points: 3 },
    square: { points: 4 },
    pentagon: { points: 5 },
    hexagon: { points: 6 },
    "star-4": { points: 4, radius2: 0.4 },
    "star-5": { points: 5, radius2: 0.4 },
    "star-6": { points: 6, radius2: 0.5 },
};

function getLineDashPreset(lineDash: number[] | undefined): string {
    if (!lineDash) return "solid";
    const dashStr = lineDash.join(",");
    for (const [name, preset] of Object.entries(LINE_DASH_PRESETS)) {
        if (preset && preset.join(",") === dashStr) return name;
    }
    return "custom";
}

function getShapePreset(
    points: number | undefined,
    radius2: number | undefined
): string {
    if (!points) return "triangle";
    for (const [name, preset] of Object.entries(SHAPE_PRESETS)) {
        if (preset.points === points) {
            if (preset.radius2 !== undefined && radius2 !== undefined) {
                return name;
            } else if (
                preset.radius2 === undefined &&
                radius2 === undefined
            ) {
                return name;
            }
        }
    }
    return "custom";
}

export function renderStyleDetail(
    styleId: string,
    style: GsStyle,
    geometryTypes: GsGeometryType[],
    handlers: StyleUpdateHandlers
) {
    const showStroke = shouldShowProperty("stroke", geometryTypes);
    const showFill = shouldShowProperty("fill", geometryTypes);
    const showImage = shouldShowProperty("image", geometryTypes);

    return html`
        <div class="detail-panel">
            <h3>Edit Style: ${styleId}</h3>
            ${geometryTypes.length > 0
                ? html`
                      <p class="geometry-types">
                          Geometry types: ${geometryTypes.join(", ")}
                      </p>
                  `
                : ""}

            ${showStroke ? renderStrokeSection(style, handlers) : ""}
            ${showFill ? renderFillSection(style, handlers) : ""}
            ${showImage ? renderImageSection(style, handlers) : ""}
        </div>
    `;
}

function renderStrokeSection(
    style: GsStyle,
    handlers: StyleUpdateHandlers
) {
    const currentDashPreset = getLineDashPreset(style.stroke?.lineDash);

    return html`
        <div class="form-section">
            <h4>Stroke</h4>
            <wa-color-picker
                label="Color"
                value="${style.stroke?.color || "#000000"}"
                opacity
                size="small"
                @change=${(e: any) =>
                    handlers.onStrokeColorChange(e.target.value)}
            ></wa-color-picker>
            <wa-input
                type="number"
                label="Width"
                value="${style.stroke?.width || ""}"
                min="0"
                step="0.5"
                @input=${(e: any) =>
                    handlers.onStrokeWidthChange(parseFloat(e.target.value))}
            ></wa-input>
            <wa-select
                label="Line Style"
                value="${currentDashPreset}"
                @change=${(e: any) =>
                    handlers.onStrokeLineDashChange(
                        LINE_DASH_PRESETS[e.target.value]
                    )}
            >
                <wa-option value="solid">Solid</wa-option>
                <wa-option value="dashed">Dashed</wa-option>
                <wa-option value="dotted">Dotted</wa-option>
                <wa-option value="dash-dot">Dash-Dot</wa-option>
                <wa-option value="long-dash">Long Dash</wa-option>
            </wa-select>
            <wa-select
                label="Line Cap"
                value="${style.stroke?.lineCap || "round"}"
                @change=${(e: any) =>
                    handlers.onStrokeLineCapChange(e.target.value)}
            >
                <wa-option value="butt">Butt</wa-option>
                <wa-option value="round">Round</wa-option>
                <wa-option value="square">Square</wa-option>
            </wa-select>
            <wa-select
                label="Line Join"
                value="${style.stroke?.lineJoin || "round"}"
                @change=${(e: any) =>
                    handlers.onStrokeLineJoinChange(e.target.value)}
            >
                <wa-option value="bevel">Bevel</wa-option>
                <wa-option value="round">Round</wa-option>
                <wa-option value="miter">Miter</wa-option>
            </wa-select>
        </div>
    `;
}

function renderFillSection(
    style: GsStyle,
    handlers: StyleUpdateHandlers
) {
    return html`
        <div class="form-section">
            <h4>Fill</h4>
            <wa-color-picker
                label="Color"
                value="${style.fill?.color || "#000000"}"
                opacity
                size="small"
                @change=${(e: any) =>
                    handlers.onFillColorChange(e.target.value)}
            ></wa-color-picker>
        </div>
    `;
}

function renderImageSection(
    style: GsStyle,
    handlers: StyleUpdateHandlers
) {
    const imageType = style.image?.type || "circle";

    return html`
        <div class="form-section">
            <h4>Point Symbol</h4>
            <wa-select
                label="Symbol Type"
                value="${imageType}"
                @change=${(e: any) =>
                    handlers.onImageTypeChange(e.target.value)}
            >
                <wa-option value="circle">Circle</wa-option>
                <wa-option value="regular-shape">Shape</wa-option>
                <wa-option value="icon">Icon</wa-option>
            </wa-select>

            ${imageType === "circle"
                ? renderCircleProperties(style, handlers)
                : ""}
            ${imageType === "regular-shape"
                ? renderRegularShapeProperties(style, handlers)
                : ""}
            ${imageType === "icon"
                ? renderIconProperties(style, handlers)
                : ""}

            ${style.image
                ? renderCommonImageProperties(style, handlers)
                : ""}
        </div>
    `;
}

function renderCircleProperties(
    style: GsStyle,
    handlers: StyleUpdateHandlers
) {
    return html`
        <wa-divider></wa-divider>
        <wa-input
            type="number"
            label="Radius"
            value="${style.image?.radius || 5}"
            min="1"
            step="1"
            @input=${(e: any) =>
                handlers.onImageRadiusChange(parseFloat(e.target.value))}
        ></wa-input>
        <wa-color-picker
            label="Fill Color"
            value="${style.image?.fill?.color || "#0064ff"}"
            opacity
            size="small"
            @change=${(e: any) =>
                handlers.onImageFillColorChange(e.target.value)}
        ></wa-color-picker>
        <wa-color-picker
            label="Stroke Color"
            value="${style.image?.stroke?.color || "#ffffff"}"
            opacity
            size="small"
            @change=${(e: any) =>
                handlers.onImageStrokeColorChange(e.target.value)}
        ></wa-color-picker>
        <wa-input
            type="number"
            label="Stroke Width"
            value="${style.image?.stroke?.width || 2}"
            min="0"
            step="0.5"
            @input=${(e: any) =>
                handlers.onImageStrokeWidthChange(parseFloat(e.target.value))}
        ></wa-input>
    `;
}

function renderRegularShapeProperties(
    style: GsStyle,
    handlers: StyleUpdateHandlers
) {
    const currentPreset = getShapePreset(
        style.image?.points,
        style.image?.radius2
    );
    const isStar = style.image?.radius2 !== undefined;

    return html`
        <wa-divider></wa-divider>
        <wa-select
            label="Shape Preset"
            value="${currentPreset}"
            @change=${(e: any) => {
                const preset = SHAPE_PRESETS[e.target.value];
                if (preset) {
                    handlers.onImagePointsChange(preset.points);
                    handlers.onImageRadius2Change(
                        preset.radius2 !== undefined
                            ? preset.radius2 * (style.image?.radius || 10)
                            : undefined
                    );
                }
            }}
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
            value="${style.image?.points || 5}"
            min="3"
            max="12"
            step="1"
            @input=${(e: any) =>
                handlers.onImagePointsChange(parseInt(e.target.value))}
        ></wa-input>
        <wa-input
            type="number"
            label="Outer Radius"
            value="${style.image?.radius || 10}"
            min="1"
            step="1"
            @input=${(e: any) =>
                handlers.onImageRadiusChange(parseFloat(e.target.value))}
        ></wa-input>
        <wa-switch
            ?checked=${isStar}
            @change=${(e: any) => {
                if (e.target.checked) {
                    handlers.onImageRadius2Change(
                        (style.image?.radius || 10) * 0.4
                    );
                } else {
                    handlers.onImageRadius2Change(undefined);
                }
            }}
        >
            Star shape (inner radius)
        </wa-switch>
        ${isStar
            ? html`
                  <wa-input
                      type="number"
                      label="Inner Radius"
                      value="${style.image?.radius2 || 4}"
                      min="1"
                      step="1"
                      @input=${(e: any) =>
                          handlers.onImageRadius2Change(
                              parseFloat(e.target.value)
                          )}
                  ></wa-input>
              `
            : ""}
        <wa-input
            type="number"
            label="Angle (degrees)"
            value="${((style.image?.angle || 0) * 180) / Math.PI}"
            step="15"
            @input=${(e: any) =>
                handlers.onImageAngleChange(
                    (parseFloat(e.target.value) * Math.PI) / 180
                )}
        ></wa-input>
        <wa-color-picker
            label="Fill Color"
            value="${style.image?.fill?.color || "#0064ff"}"
            opacity
            size="small"
            @change=${(e: any) =>
                handlers.onImageFillColorChange(e.target.value)}
        ></wa-color-picker>
        <wa-color-picker
            label="Stroke Color"
            value="${style.image?.stroke?.color || "#ffffff"}"
            opacity
            size="small"
            @change=${(e: any) =>
                handlers.onImageStrokeColorChange(e.target.value)}
        ></wa-color-picker>
        <wa-input
            type="number"
            label="Stroke Width"
            value="${style.image?.stroke?.width || 2}"
            min="0"
            step="0.5"
            @input=${(e: any) =>
                handlers.onImageStrokeWidthChange(parseFloat(e.target.value))}
        ></wa-input>
    `;
}

function svgToDataUri(svgMarkup: string, size: number = 24): string {
    let svg = svgMarkup.trim();

    if (!svg.startsWith("<svg") && !svg.startsWith("<?xml")) {
        throw new Error("Invalid SVG markup");
    }

    svg = svg.replace(/<\?xml[^>]*\?>\s*/i, "");

    if (!svg.includes("width=")) {
        svg = svg.replace("<svg", `<svg width="${size}"`);
    }
    if (!svg.includes("height=")) {
        svg = svg.replace("<svg", `<svg height="${size}"`);
    }

    const base64 = btoa(unescape(encodeURIComponent(svg)));
    return `data:image/svg+xml;base64,${base64}`;
}

function renderIconProperties(
    style: GsStyle,
    handlers: StyleUpdateHandlers
) {
    let currentSrc = style.image?.src || "";
    const isDataUri = currentSrc.startsWith("data:");
    const detectedPreset = isDataUri
        ? detectPresetFromDataUri(currentSrc)
        : null;
    let isPreset = detectedPreset !== null;
    const isCustomSvg = isDataUri && !isPreset;
    const isUrl = !isDataUri && currentSrc.length > 0;
    const extractedColor = isDataUri
        ? extractColorFromDataUri(currentSrc)
        : null;
    const currentColor =
        extractedColor || style.image?.color || DEFAULT_ICON_COLOR;

    if (!currentSrc) {
        const defaultDataUri = generateIconDataUri("marker", currentColor);
        setTimeout(() => handlers.onImageSrcChange(defaultDataUri), 0);
        currentSrc = defaultDataUri;
        isPreset = true;
    }

    let currentMode = "marker";
    if (isPreset && detectedPreset) {
        currentMode = detectedPreset;
    } else if (isPreset && !detectedPreset) {
        currentMode = "marker";
    } else if (isCustomSvg) {
        currentMode = "paste-svg";
    } else if (isUrl) {
        currentMode = "custom-url";
    }

    return html`
        <wa-divider></wa-divider>
        <wa-select
            label="Icon Source"
            value="${currentMode}"
            @change=${(e: any) => {
                const value = e.target.value;
                if (ICON_SVG_TEMPLATES[value]) {
                    const dataUri = generateIconDataUri(value, currentColor);
                    handlers.onImageSrcChange(dataUri);
                } else if (value === "paste-svg") {
                    handlers.onImageSrcChange("");
                } else if (value === "custom-url") {
                    handlers.onImageSrcChange("");
                }
            }}
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

        ${isUrl || currentMode === "custom-url"
            ? html`
                  <wa-input
                      label="Icon URL"
                      value="${currentSrc}"
                      placeholder="https://example.com/icon.svg"
                      @input=${(e: any) =>
                          handlers.onImageSrcChange(e.target.value)}
                  ></wa-input>
              `
            : ""}

        ${currentMode === "paste-svg"
            ? html`
                  <wa-textarea
                      label="Paste SVG Code"
                      placeholder="<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 24 24&quot;>...</svg>"
                      rows="4"
                      @input=${(e: any) => {
                          const svgCode = e.target.value.trim();
                          if (svgCode && svgCode.startsWith("<svg")) {
                              try {
                                  const dataUri = svgToDataUri(svgCode, 24);
                                  handlers.onImageSrcChange(dataUri);
                              } catch (err) {
                                  console.warn("Invalid SVG:", err);
                              }
                          }
                      }}
                  ></wa-textarea>
                  <p class="help-text">
                      Paste SVG markup. Width/height will be set to 24px
                      automatically.
                  </p>
              `
            : ""}

        ${isPreset
            ? html`
                  <wa-color-picker
                      label="Fill Color"
                      value="${currentColor}"
                      opacity
                      size="small"
                      @change=${(e: any) => {
                          const presetName = detectedPreset || currentMode;
                          if (ICON_SVG_TEMPLATES[presetName]) {
                              const dataUri = generateIconDataUri(
                                  presetName,
                                  e.target.value
                              );
                              handlers.onImageSrcChange(dataUri);
                          }
                      }}
                  ></wa-color-picker>
              `
            : html`
                  <wa-color-picker
                      label="Tint Color"
                      value="${style.image?.color || DEFAULT_ICON_COLOR}"
                      opacity
                      size="small"
                      @change=${(e: any) =>
                          handlers.onImageColorChange(e.target.value)}
                  ></wa-color-picker>
                  <p class="help-text">
                      Tint only works with some image formats.
                  </p>
              `}

        <wa-input
            type="number"
            label="Scale"
            value="${style.image?.scale || 1}"
            min="0.1"
            max="10"
            step="0.1"
            @input=${(e: any) =>
                handlers.onImageScaleChange(parseFloat(e.target.value))}
        ></wa-input>
    `;
}

function renderCommonImageProperties(
    style: GsStyle,
    handlers: StyleUpdateHandlers
) {
    const showScale = style.image?.type !== "icon";

    return html`
        <wa-divider></wa-divider>
        <wa-input
            type="number"
            label="Rotation (degrees)"
            value="${((style.image?.rotation || 0) * 180) / Math.PI}"
            step="15"
            @input=${(e: any) =>
                handlers.onImageRotationChange(
                    (parseFloat(e.target.value) * Math.PI) / 180
                )}
        ></wa-input>
        <wa-slider
            label="Opacity"
            value="${(style.image?.opacity ?? 1) * 100}"
            min="0"
            max="100"
            step="5"
            @change=${(e: any) =>
                handlers.onImageOpacityChange(e.target.value / 100)}
        ></wa-slider>
        ${showScale
            ? html`
                  <wa-input
                      type="number"
                      label="Scale"
                      value="${style.image?.scale || 1}"
                      min="0.1"
                      max="10"
                      step="0.1"
                      @input=${(e: any) =>
                          handlers.onImageScaleChange(parseFloat(e.target.value))}
                  ></wa-input>
              `
            : ""}
    `;
}
