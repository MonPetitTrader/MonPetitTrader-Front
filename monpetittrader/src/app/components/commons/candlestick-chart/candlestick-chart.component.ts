import { Component } from '@angular/core';
import { PlotlyModule } from 'angular-plotly.js';
import * as PlotlyJS from 'plotly.js-dist-min';


PlotlyModule.plotlyjs = PlotlyJS

@Component({
  selector: 'app-candlestick-chart',
  standalone: true,
  imports: [PlotlyModule],
  templateUrl: './candlestick-chart.component.html',
  styleUrl: './candlestick-chart.component.css'
})
export class CandlestickChartComponent {


  constructor() {
  }

  graph = {
    data: [
      { x: [1, 2, 3], y: [2, 6, 3], type: 'scatter', mode: 'lines+points', marker: { color: 'red' } },
      { x: [1, 2, 3], y: [2, 5, 3], type: 'bar' },
    ],
    layout: { width: 320, height: 240, title: 'A Fancy Plot' }
  };
}
