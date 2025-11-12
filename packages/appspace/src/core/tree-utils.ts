import {Contribution} from "./contributionregistry";

export interface TreeNode {
    data: any;
    label: string;
    icon?: string;
    leaf: boolean;
    children: TreeNode[];
}

export const treeNodeComparator = (c1: TreeNode, c2: TreeNode) => {
    if (!c1.leaf && c2.leaf) {
        return -1
    }
    if (c1.leaf && !c2.leaf) {
        return 1
    }
    return c1.label.localeCompare(c2.label)
}

export interface TreeContribution extends Contribution {
    contributionId?: string;
    state?: { [key: string]: any }
}