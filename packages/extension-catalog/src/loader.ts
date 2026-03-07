import { html } from "@eclipse-lyra/core/externals/lit";
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
    type Directory,
} from "@eclipse-lyra/core/api";

async function ensureWorkspacePath(workspace: Directory | undefined, path: string): Promise<string> {
    if (!workspace || path.includes("/")) return path;
    const children = await workspace.listChildren(false);
    const first = children[0];
    if (!first) return path;
    return `${first.getName()}/${path}`;
}

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
                .then(async (blob) => {
                    const segs = new URL(url).pathname.split("/");
                    const fileName = segs[segs.length - 1];
                    const savePath = await ensureWorkspacePath(workspaceDir, fileName);
                    return workspaceDir
                        .getResource(savePath, { create: true })
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
