import { html } from "@kispace-io/core/externals/lit";
import { contributionRegistry, SIDEBAR_MAIN_BOTTOM } from "@kispace-io/core/api";
import "./gs-map-props";

contributionRegistry.registerContribution(SIDEBAR_MAIN_BOTTOM, {
    name: "map-props",
    label: "Map Properties",
    icon: "fg map-options",
    component: (id: string) => html`<gs-map-props id="${id}"></gs-map-props>`,
} as any);
