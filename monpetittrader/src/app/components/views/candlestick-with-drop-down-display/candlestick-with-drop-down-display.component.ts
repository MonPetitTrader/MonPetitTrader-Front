import { Component } from '@angular/core';
import { CandlestickChartComponent } from '../../commons/candlestick-chart/candlestick-chart.component';
import { DropdownSelectorComponent } from '../../commons/dropdown-selector/dropdown-selector.component';

@Component({
  selector: 'app-candlestick-with-drop-down-display',
  standalone: true,
  imports: [CandlestickChartComponent, DropdownSelectorComponent],
  templateUrl: './candlestick-with-drop-down-display.component.html',
  styleUrl: './candlestick-with-drop-down-display.component.css'
})
export class CandlestickWithDropDownDisplayComponent {
  selectedOption: string = 'IBM';

  updateSelection(option: string) {
    this.selectedOption = option;
  }
}
