import { GsGeometryType, GsStyleRule } from "@kispace-io/gs-lib";

export function getGeometryTypesForStyle(
    styleId: string,
    rules: GsStyleRule[]
): GsGeometryType[] {
    const geometryTypes = new Set<GsGeometryType>();

    for (const rule of rules) {
        if (rule.styleId === styleId && rule.condition.geometryType) {
            const types = Array.isArray(rule.condition.geometryType)
                ? rule.condition.geometryType
                : [rule.condition.geometryType];
            types.forEach((type) => geometryTypes.add(type));
        }
    }

    return Array.from(geometryTypes);
}

export function isPointGeometry(
    geometryTypes: GsGeometryType[]
): boolean {
    return geometryTypes.some(
        (type) =>
            type === GsGeometryType.Point ||
            type === GsGeometryType.MultiPoint
    );
}

export function isLineGeometry(
    geometryTypes: GsGeometryType[]
): boolean {
    return geometryTypes.some(
        (type) =>
            type === GsGeometryType.LineString ||
            type === GsGeometryType.MultiLineString
    );
}

export function isPolygonGeometry(
    geometryTypes: GsGeometryType[]
): boolean {
    return geometryTypes.some(
        (type) =>
            type === GsGeometryType.Polygon ||
            type === GsGeometryType.MultiPolygon ||
            type === GsGeometryType.Circle
    );
}

export type StylePropertyType = "stroke" | "fill" | "image";

export function shouldShowProperty(
    property: StylePropertyType,
    geometryTypes: GsGeometryType[]
): boolean {
    if (geometryTypes.length === 0) return true;

    const isPoint = isPointGeometry(geometryTypes);
    const isLine = isLineGeometry(geometryTypes);
    const isPolygon = isPolygonGeometry(geometryTypes);

    switch (property) {
        case "stroke":
            return isLine || isPolygon;
        case "fill":
            return isPolygon;
        case "image":
            return isPoint || isLine || isPolygon;
        default:
            return true;
    }
}

export function getRuleConditionSummary(rule: GsStyleRule): string {
    const parts: string[] = [];

    if (rule.condition.geometryType) {
        const types = Array.isArray(rule.condition.geometryType)
            ? rule.condition.geometryType
            : [rule.condition.geometryType];
        parts.push(`Type: ${types.join(", ")}`);
    }

    if (rule.condition.layerName) {
        parts.push(`Layer: ${rule.condition.layerName}`);
    }

    if (rule.condition.property) {
        const prop = rule.condition.property;
        parts.push(`${prop.key} ${prop.operator || "exists"} ${prop.value || ""}`);
    }

    return parts.join(" | ") || "All features";
}
