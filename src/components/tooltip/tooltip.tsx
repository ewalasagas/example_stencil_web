import { Component, h, State, Prop} from '@stencil/core';

@Component({
    tag: 'my-tooltip',
    styleUrl: './tooltip.css',
    shadow: true
})

export class ToolTip {
    @State() tooltipVisible = false;
    @Prop({reflect: true}) tip: string;

    onToggleTooltip() {
        this.tooltipVisible = !this.tooltipVisible;
    }

    render() {
        let tooltip = null;
        if(this.tooltipVisible) {
            tooltip = <div id="tooltip-text">{this.tip}</div>
        }
        return [
            <slot />,
            <span id="tooltip-icon" onClick={this.onToggleTooltip.bind(this)}>?</span>,
            tooltip
        ];
    }
};