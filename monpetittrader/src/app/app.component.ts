import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DebugComponent } from './debug/debug.component';
import { CandlestickWithDropDownDisplayComponent } from './components/views/candlestick-with-drop-down-display/candlestick-with-drop-down-display.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DebugComponent, CandlestickWithDropDownDisplayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'monpetittrader';
}
