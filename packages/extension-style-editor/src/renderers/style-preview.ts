import { html } from "@kispace-io/core/externals/lit";
import { GsStyle } from "@kispace-io/gs-lib";

export function renderStylePreview(style: GsStyle) {
    const strokeColor = style.stroke?.color || "transparent";
    const fillColor = style.fill?.color || "transparent";
    const strokeWidth = Math.min(style.stroke?.width || 1, 5);
    const lineDash = style.stroke?.lineDash?.join(" ") || "none";
    const lineCap = style.stroke?.lineCap || "round";
    const lineJoin = style.stroke?.lineJoin || "round";

    if (style.image?.type === "circle") {
        return renderCirclePreview(
            style,
            strokeColor,
            fillColor,
            strokeWidth
        );
    }

    if (style.image?.type === "regular-shape") {
        return renderRegularShapePreview(
            style,
            strokeColor,
            fillColor,
            strokeWidth
        );
    }

    if (style.image?.type === "icon") {
        return renderIconPreview(style);
    }

    return html`
        <svg width="40" height="40" viewBox="0 0 40 40">
            <rect
                x="5"
                y="5"
                width="30"
                height="30"
                fill="${fillColor}"
                stroke="${strokeColor}"
                stroke-width="${strokeWidth}"
                stroke-dasharray="${lineDash}"
                stroke-linecap="${lineCap}"
                stroke-linejoin="${lineJoin}"
            />
        </svg>
    `;
}

function renderCirclePreview(
    style: GsStyle,
    defaultStrokeColor: string,
    defaultFillColor: string,
    defaultStrokeWidth: number
) {
    const radius = Math.min(style.image?.radius || 5, 15);
    const imgFill = style.image?.fill?.color || defaultFillColor;
    const imgStroke = style.image?.stroke?.color || defaultStrokeColor;
    const imgStrokeWidth = Math.min(
        style.image?.stroke?.width || defaultStrokeWidth,
        3
    );
    const opacity = style.image?.opacity ?? 1;
    const rotation = (style.image?.rotation || 0) * (180 / Math.PI);
    const scale = style.image?.scale || 1;

    return html`
        <svg width="40" height="40" viewBox="0 0 40 40">
            <circle
                cx="20"
                cy="20"
                r="${radius * scale}"
                fill="${imgFill}"
                stroke="${imgStroke}"
                stroke-width="${imgStrokeWidth}"
                opacity="${opacity}"
                transform="rotate(${rotation}, 20, 20)"
            />
        </svg>
    `;
}

function renderRegularShapePreview(
    style: GsStyle,
    defaultStrokeColor: string,
    defaultFillColor: string,
    defaultStrokeWidth: number
) {
    const points = style.image?.points || 5;
    const radius = Math.min(style.image?.radius || 10, 15);
    const imgFill = style.image?.fill?.color || defaultFillColor;
    const imgStroke = style.image?.stroke?.color || defaultStrokeColor;
    const imgStrokeWidth = Math.min(
        style.image?.stroke?.width || defaultStrokeWidth,
        3
    );
    const opacity = style.image?.opacity ?? 1;
    const rotation =
        ((style.image?.rotation || 0) + (style.image?.angle || 0)) *
        (180 / Math.PI);

    const pathPoints = generateRegularShapePoints(
        20,
        20,
        radius,
        points,
        style.image?.radius2
    );

    return html`
        <svg width="40" height="40" viewBox="0 0 40 40">
            <polygon
                points="${pathPoints}"
                fill="${imgFill}"
                stroke="${imgStroke}"
                stroke-width="${imgStrokeWidth}"
                opacity="${opacity}"
                transform="rotate(${rotation}, 20, 20)"
            />
        </svg>
    `;
}

function renderIconPreview(style: GsStyle) {
    const src = style.image?.src;
    const color = style.image?.color || "#0064ff";
    const opacity = style.image?.opacity ?? 1;
    const rotation = (style.image?.rotation || 0) * (180 / Math.PI);
    const scale = style.image?.scale || 1;

    if (!src) {
        return html`
            <svg width="40" height="40" viewBox="0 0 40 40">
                <rect
                    x="8"
                    y="8"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="${color}"
                    stroke-width="2"
                    stroke-dasharray="4 2"
                    opacity="${opacity}"
                />
                <text
                    x="20"
                    y="24"
                    text-anchor="middle"
                    font-size="12"
                    fill="${color}"
                    opacity="${opacity}"
                >
                    ?
                </text>
            </svg>
        `;
    }

    if (src.startsWith("data:image/svg+xml")) {
        return html`
            <div
                style="
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: ${color};
                    opacity: ${opacity};
                    transform: rotate(${rotation}deg) scale(${scale});
                "
            >
                <img
                    src="${src}"
                    width="24"
                    height="24"
                    style="filter: drop-shadow(0 0 0 ${color});"
                    alt="icon"
                />
            </div>
        `;
    }

    return html`
        <div
            style="
                width: 40px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                opacity: ${opacity};
                transform: rotate(${rotation}deg) scale(${scale});
            "
        >
            <img
                src="${src}"
                width="24"
                height="24"
                alt="icon"
                style="object-fit: contain;"
                @error=${(e: Event) => {
                    const img = e.target as HTMLImageElement;
                    img.style.display = "none";
                }}
            />
        </div>
    `;
}

function generateRegularShapePoints(
    cx: number,
    cy: number,
    radius: number,
    numPoints: number,
    innerRadius?: number
): string {
    const points: string[] = [];
    const angleStep = (2 * Math.PI) / numPoints;
    const startAngle = -Math.PI / 2;

    if (innerRadius !== undefined) {
        for (let i = 0; i < numPoints * 2; i++) {
            const r = i % 2 === 0 ? radius : innerRadius;
            const angle = startAngle + (i * angleStep) / 2;
            const x = cx + r * Math.cos(angle);
            const y = cy + r * Math.sin(angle);
            points.push(`${x},${y}`);
        }
    } else {
        for (let i = 0; i < numPoints; i++) {
            const angle = startAngle + i * angleStep;
            const x = cx + radius * Math.cos(angle);
            const y = cy + radius * Math.sin(angle);
            points.push(`${x},${y}`);
        }
    }

    return points.join(" ");
}
