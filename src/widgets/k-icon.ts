import {customElement, property} from 'lit/decorators.js'

import {KWidget} from "./k-widget.ts";
import { icon } from '../core/k-utils.ts';

@customElement('k-icon')
export class KIcon extends KWidget {

    @property()
    private name?: string;

    @property()
    private family?: string = "regular";

    @property()
    private variant?: string;

    @property()
    private label?: string;

    render() {
        return icon(this.name, this.label, this.family, this.variant)
    }
}
