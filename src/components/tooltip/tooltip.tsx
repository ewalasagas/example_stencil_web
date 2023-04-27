import { Component, h, State} from '@stencil/core';

@Component({
    tag: 'uc-tooltip',
    styleUrl: './tooltip.css',
    shadow: true
})

export class ToolTip {
    @State() tooltipVisible = false;

    onToggleTooltip() {
        this.tooltipVisible = !this.tooltipVisible;
    }

    render() {
        let tooltip = null;
        if(this.tooltipVisible) {
            tooltip = <div id="tooltip-text">This is a the tooltip text!</div>
        }
        return [
            <slot />,
            <span id="tooltip-icon" onClick={this.onToggleTooltip.bind(this)}>?</span>,
            tooltip
        ];
    }
};