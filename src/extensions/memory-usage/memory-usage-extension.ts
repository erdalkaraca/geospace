import {contributionRegistry, HTMLContribution} from "../../core/contributionregistry";
import {TOOLBAR_BOTTOM} from "../../core/constants";
import "./k-memory-usage";

contributionRegistry.registerContribution(TOOLBAR_BOTTOM, {
    target: TOOLBAR_BOTTOM,
    label: "Memory",
    disabled: () => !(performance as any).memory,
    html: `<k-memory-usage></k-memory-usage>`
} as HTMLContribution)

