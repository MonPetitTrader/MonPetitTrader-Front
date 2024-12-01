import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown-selector.component.html',
  styleUrl: './dropdown-selector.component.css'
})
export class DropdownSelectorComponent {
  symbols = ["BRK.A", "BRK.B", "TSM", "WMT", "JPM", "LLY", "V", "UNH", "XOM", "ORCL", "MA", "NVO", "PG", "HD", "JNJ", "BAC", "CRM", "ABBV", "CVX", "SAP", "KO", "MRK", "WFC", "TM", "BX", "ACN", "MS", "NOW", "MCD", "NVS", "SHEL", "DIS", "PM", "ABT", "BABA", "AXP", "IBM", "GS", "GE", "TMO", "CAT", "VZ", "RY", "DHR", "T", "HSBC", "BLK", "RTX", "HDB", "NEE", "SPGI", "PGR", "SYK", "LOW", "SCHW", "UBER", "UL", "ETN", "UNP", "PFE", "TTE", "MUFG", "PLTR", "KKR", "SHOP", "TJX", "BSX", "BHP", "COP", "C", "LMT", "FI", "ANET", "CB", "SONY", "BMY", "UPS", "BUD", "NKE", "MMC", "DE", "MDT", "BA", "PLD", "RIO", "IBN", "UBS", "TD", "SO", "MO", "APO", "DELL", "AMT", "SHW", "SMFG", "ELV", "ENB", "SPOT", "TT", "ICE"].sort()

  @Output() selectionChange = new EventEmitter<string>();

  onSelect(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.selectionChange.emit(value);
    console.log(value) 
  }
}
