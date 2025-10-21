import {html} from "lit";
import {TABS_RIGHT} from "../../core/constants.ts";
import "./k-pyterminal.ts";

export default ({ contributionRegistry }: any) => {
    contributionRegistry.registerContribution(TABS_RIGHT, {
        name: "pyterminal",
        label: "Python",
        icon: "terminal",
        component: () => html`
            <k-pyterminal></k-pyterminal>`
    });
}

