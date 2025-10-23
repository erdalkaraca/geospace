import {html} from "lit";
import {PANEL_BOTTOM} from "../../core/constants.ts";
import "./k-pyterminal.ts";

export default ({ contributionRegistry }: any) => {
    contributionRegistry.registerContribution(PANEL_BOTTOM, {
        name: "pyterminal",
        label: "Python",
        icon: "k python",
        component: () => html`
            <k-pyterminal></k-pyterminal>`
    });
}

