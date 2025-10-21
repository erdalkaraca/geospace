import {contributionRegistry, HTMLContribution} from "../../core/contributionregistry.ts";
import {TOOLBAR_BOTTOM} from "../../core/constants.ts";
import "./k-memory-usage.ts";

contributionRegistry.registerContribution(TOOLBAR_BOTTOM, {
    target: TOOLBAR_BOTTOM,
    label: "Memory",
    disabled: () => !(performance as any).memory,
    html: `<k-memory-usage></k-memory-usage>`
} as HTMLContribution)

