import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DebugComponent } from './debug/debug.component';
import { CandlestickChartComponent } from './components/commons/candlestick-chart/candlestick-chart.component';
import { DropdownSelectorComponent } from "./components/commons/dropdown-selector/dropdown-selector.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DebugComponent, CandlestickChartComponent, DropdownSelectorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'monpetittrader';
}
