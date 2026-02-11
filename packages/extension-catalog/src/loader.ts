import { html } from "@kispace-io/core/externals/lit";
import { GsCatalog } from "./gs-catalog";
import {
    registerAll,
    File,
    FileContentType,
    workspaceService,
    activePartSignal,
    activeSelectionSignal,
    toastError,
    toastInfo,
    contributionRegistry,
} from "@kispace-io/core/api";

registerAll({
    command: {
        id: "checkout",
        name: "Checkout",
        description:
            "Checkout a catalog item into the workspace",
        parameters: [
            {
                name: "url",
                description:
                    "the url of the resource to checkout, if not provided, the current selection in the catalog will be used",
                required: false,
            },
        ],
    },
    handler: {
        execute: async (context) => {
            let url: string = context.params && context.params["url"];
            if (!url) {
                const catalogItem = activeSelectionSignal.get();
                if (!catalogItem || !("url" in catalogItem)) {
                    return;
                }
                url = catalogItem.url as string;
            }

            const workspaceDir = await workspaceService.getWorkspace();
            if (!workspaceDir) {
                toastError("No workspace selected.");
                return;
            }
            fetch(url, { method: "GET" })
                .then((resp) => resp.blob())
                .then((blob) => {
                    const segs = new URL(url).pathname.split("/");
                    const fileName = segs[segs.length - 1];
                    return workspaceDir
                        .getResource(fileName, { create: true })
                        .then((resource) => {
                            const file = resource as File;
                            return file
                                .saveContents(blob, {
                                    contentType: FileContentType.BINARY,
                                })
                                .then(() => {
                                    toastInfo("File checked out: " + fileName);
                                });
                        });
                })
                .catch((err) => {
                    toastError(String(err));
                });
        },
    },
});

registerAll({
    command: {
        id: "refresh_catalog",
        name: "Refresh Catalog",
        description: "Refreshes the catalog view",
        parameters: [],
    },
    handler: {
        execute: async () => {
            const part = activePartSignal.get();
            if (part instanceof GsCatalog) {
                part.refresh();
            }
        },
    },
});

registerAll({
    command: {
        id: "catalog_expand_all",
        name: "Expand All Catalog Items",
        description: "Expands all items in the catalog tree",
        parameters: [],
    },
    handler: {
        execute: async () => {
            const part = activePartSignal.get();
            if (part instanceof GsCatalog) {
                part.setAllExpanded(true);
            }
        },
    },
});

registerAll({
    command: {
        id: "catalog_collapse_all",
        name: "Collapse All Catalog Items",
        description: "Collapses all items in the catalog tree",
        parameters: [],
    },
    handler: {
        execute: async () => {
            const part = activePartSignal.get();
            if (part instanceof GsCatalog) {
                part.setAllExpanded(false);
            }
        },
    },
});

contributionRegistry.registerContribution("system.fastviews-bottomend", {
    name: "catalog",
    label: "Catalog",
    icon: "book",
    component: (id: string) => html`<gs-catalog id="${id}"></gs-catalog>`,
} as any);
