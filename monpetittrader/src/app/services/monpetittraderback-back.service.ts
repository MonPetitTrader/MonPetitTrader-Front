import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MonpetittraderbackBackService {
  private queriedUrl: string;

  constructor(private http: HttpClient) {
    this.queriedUrl = 'http://localhost:8080'
   }

  get(endpoint?: string): Observable<any> {
    return this.http.get(`${this.queriedUrl}/${endpoint}`);
  }

  getStreamedData<T>(endpoint?: string): Observable<T> {
    return this.http.get<T>(`${this.queriedUrl}/${endpoint}`).pipe(
      map((data: T) => data)
    );
  }

  getStreamIntradayQuotes(cieId: string): Observable<string> {
    return this.getStreamedData<string>(`real-time-quote/${cieId}`);
  }

  getDailyTimesSeries(cieId: string): Observable<any> {
    return this.http.get(`${this.queriedUrl}/quote/${cieId}/all`);
  }
}
