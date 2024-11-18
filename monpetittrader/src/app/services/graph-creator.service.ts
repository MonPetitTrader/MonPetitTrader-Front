import { Injectable } from '@angular/core';
import { PlotlyModule } from 'angular-plotly.js';
import * as PlotlyJS from 'angular-plotly.js';

@Injectable({
  providedIn: 'root'
})
export class GraphCreatorService {

  public increaseColor: string = '#17BECF'
  public decreaseColor: string = '#7F7F7F'

  constructor() {
    PlotlyModule.plotlyjs = PlotlyJS
  }

  
  
   
}
