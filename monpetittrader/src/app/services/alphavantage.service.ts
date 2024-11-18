import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { CandleDataObject, CandleDataSeries } from '../interfaces/candle-data';

@Injectable({
  providedIn: 'root'
})
export class AlphavantageService {

  private baseUrl = 'https://www.alphavantage.co/query'
  private apiKey = environment.alphavantageApiKey

  constructor(private http: HttpClient) { };

  getDailyTimesSeries(symbol: string): Observable<any> {

    const queryParams = new HttpParams()
      .set('function', 'TIME_SERIES_DAILY')
      .set('symbol', symbol)
      .set('apikey', this.apiKey)

    return this.http.get(this.baseUrl, { params: queryParams })
  }

  // HELPERS
  transformCandleDataObjectsToSeries(rawData: { [key: string]: CandleDataObject }): CandleDataSeries {
    let candleDataSerie: CandleDataSeries = {
      x: [],
      close: [],
      high: [],
      low: [],
      open: []
    }

    for (const [date, value] of Object.entries(rawData)) {
      candleDataSerie["x"].push(date);
      candleDataSerie["close"].push(Number(value["4. close"]));
      candleDataSerie["high"].push(Number(value["2. high"]));
      candleDataSerie["low"].push(Number(value["3. low"]));
      candleDataSerie["open"].push(Number(value["3. low"]));
    }

    return candleDataSerie
  }
}
