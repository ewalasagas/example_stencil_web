import { Component, h} from '@stencil/core';

@Component({
    tag: 'uc-tooltip',
    styleUrl: './tooltip.css',
    shadow: true
})

export class ToolTip {
    // @Prop({reflect: true}) tip: string;

    render() {
        return [
            <slot />,
            <span id="tooltip-icon">?</span>,
            <div id="tooltip-text"></div>
        ];
    }
};