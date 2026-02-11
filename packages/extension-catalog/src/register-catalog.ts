import {
    contributionRegistry,
    type TreeContribution,
} from "@kispace-io/core/api";

export interface CatalogContribution extends TreeContribution {
    items?: CatalogContribution[];
}

export function registerCatalog(catalog: CatalogContribution, baseUrl: string): void {
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

        item.items?.forEach((child: any) => {
            const contribution = {
                label: child.label,
                icon: child.icon,
                state: { ...child.state },
            } as TreeContribution;
            if (contribution.state?.url) {
                contribution.state.url = (
                    contribution.state.url as string
                ).replace("${baseURL}/", baseUrl);
            }
            contributionRegistry.registerContribution(
                item.contributionId!,
                contribution
            );
        });
    });
}
