import { GsStylesMap } from "@kispace-io/gs-lib";
import { StyleUpdateHandlers } from "../renderers/style-detail";

export function updateNestedProperty(
    workingStyles: GsStylesMap,
    selectedStyleId: string,
    path: string[],
    value: any
): GsStylesMap | null {
    const style = workingStyles[selectedStyleId];
    if (!style) return null;

    let current: any = style;
    for (let i = 0; i < path.length - 1; i++) {
        const key = path[i];
        if (!current[key]) {
            current[key] = {};
        }
        current = current[key];
    }

    const finalKey = path[path.length - 1];
    const oldValue = current[finalKey];
    if (oldValue === value) return null;

    if (value === undefined) {
        delete current[finalKey];
    } else {
        current[finalKey] = value;
    }

    return { ...workingStyles };
}

export function createStyleUpdateHandlers(
    updateProperty: (path: string[], value: any) => void
): StyleUpdateHandlers {
    return {
        onStrokeColorChange: (value: string) =>
            updateProperty(["stroke", "color"], value),
        onStrokeWidthChange: (value: number) =>
            updateProperty(["stroke", "width"], value),
        onStrokeLineDashChange: (value: number[] | undefined) =>
            updateProperty(["stroke", "lineDash"], value),
        onStrokeLineCapChange: (value: string) =>
            updateProperty(["stroke", "lineCap"], value),
        onStrokeLineJoinChange: (value: string) =>
            updateProperty(["stroke", "lineJoin"], value),

        onFillColorChange: (value: string) =>
            updateProperty(["fill", "color"], value),

        onImageTypeChange: (
            value: "circle" | "icon" | "regular-shape"
        ) => updateProperty(["image", "type"], value),
        onImageRotationChange: (value: number) =>
            updateProperty(["image", "rotation"], value),
        onImageOpacityChange: (value: number) =>
            updateProperty(["image", "opacity"], value),
        onImageScaleChange: (value: number) =>
            updateProperty(["image", "scale"], value),

        onImageRadiusChange: (value: number) =>
            updateProperty(["image", "radius"], value),
        onImageFillColorChange: (value: string) =>
            updateProperty(["image", "fill", "color"], value),
        onImageStrokeColorChange: (value: string) =>
            updateProperty(["image", "stroke", "color"], value),
        onImageStrokeWidthChange: (value: number) =>
            updateProperty(["image", "stroke", "width"], value),

        onImageSrcChange: (value: string) =>
            updateProperty(["image", "src"], value),
        onImageColorChange: (value: string) =>
            updateProperty(["image", "color"], value),
        onImageAnchorChange: (value: [number, number]) =>
            updateProperty(["image", "anchor"], value),

        onImagePointsChange: (value: number) =>
            updateProperty(["image", "points"], value),
        onImageRadius2Change: (value: number | undefined) =>
            updateProperty(["image", "radius2"], value),
        onImageAngleChange: (value: number) =>
            updateProperty(["image", "angle"], value),
    };
}
