import {
    contributionRegistry,
    type TreeContribution,
} from "@kispace-io/core/api";

export interface CatalogContribution extends TreeContribution {
    items?: CatalogContribution[];
}

export function registerCatalog(catalog: CatalogContribution): void {
    contributionRegistry.registerContribution("catalog.root", {
        label: catalog.label,
        icon: catalog.icon,
        contributionId: catalog.contributionId,
    } as TreeContribution);

    const contributionId = catalog.contributionId ?? catalog.label;
    catalog.items?.forEach((item: CatalogContribution) => {
        contributionRegistry.registerContribution(contributionId, {
            label: item.label,
            icon: item.icon,
            contributionId: item.contributionId,
        } as TreeContribution);

        const url =
            (import.meta.env.VITE_BASE_PATH || "") + "/.";
        const base = import.meta.resolve(url);
        item.items?.forEach((child: any) => {
            const contribution = {
                label: child.label,
                icon: child.icon,
                state: { ...child.state },
            } as TreeContribution;
            if (contribution.state?.url) {
                contribution.state.url = (
                    contribution.state.url as string
                ).replace("${baseURL}/", base);
            }
            contributionRegistry.registerContribution(
                item.contributionId!,
                contribution
            );
        });
    });
}
