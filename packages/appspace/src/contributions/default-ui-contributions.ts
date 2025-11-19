import { html } from "lit";
import { contributionRegistry } from "../core/contributionregistry";
import {
    SIDEBAR_MAIN,
    SIDEBAR_AUXILIARY,
    TOOLBAR_BOTTOM,
    TOOLBAR_BOTTOM_END
} from "../core/constants";

contributionRegistry.registerContribution(SIDEBAR_MAIN, {
    name: "filebrowser",
    label: "Workspace",
    icon: "folder-open",
    component: (id: string) => html`<k-filebrowser id="${id}"></k-filebrowser>`
});

contributionRegistry.registerContribution(SIDEBAR_AUXILIARY, {
    name: "aiview",
    label: "AI",
    icon: "robot",
    component: (id: string) => html`<k-aiview id="${id}"></k-aiview>`
});

contributionRegistry.registerContribution("system.fastviews-bottomend", {
    name: "log-terminal",
    label: "Log Messages",
    icon: "list",
    component: (id: string) => html`<k-log-terminal id="${id}"></k-log-terminal>`
});

contributionRegistry.registerContribution(TOOLBAR_BOTTOM, {
    slot: "start",
    label: "Workspace",
    html: `<k-workspace-name></k-workspace-name>`
});

contributionRegistry.registerContribution(TOOLBAR_BOTTOM_END, {
    label: "Info",
    icon: "circle-info",
    command: "show_version_info",
    showLabel: true,
});

contributionRegistry.registerContribution(TOOLBAR_BOTTOM_END, {
    label: `Fast Views`,
    html: `<k-fastviews target="system.fastviews-bottomend" icon="bolt" title="Fast Views"></k-fastviews>`
});

contributionRegistry.registerContribution(TOOLBAR_BOTTOM_END, {
    label: "Language",
    html: () => html`<k-language-selector></k-language-selector>`
});

