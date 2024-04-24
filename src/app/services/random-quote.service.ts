import { Injectable, signal } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subscription, map } from 'rxjs';
import { environment } from '../../../environment';
import { RandomQuoteResponse } from '../models/random-quotes.model';

@Injectable({
  providedIn: 'root',
})
export class RandomQuoteService {
  private apiURL =
    'https://api.api-ninjas.com/v1/quotes?category=inspirational';
  private apiKey = new HttpHeaders({
    'X-Api-Key': environment.apiKey,
  });
  private dailyQuote = signal<RandomQuoteResponse | null>(null);

  constructor(private http: HttpClient) {}

  fetchData(): Subscription {
    return this.http
      .get<RandomQuoteResponse[]>(this.apiURL, { headers: this.apiKey })
      .pipe(map((response) => this.processData(response)))
      .subscribe();
  }

  processData(data: RandomQuoteResponse[]): void {
    this.dailyQuote.set(data[0]);
  }

  getRandomQuote() {
    return this.dailyQuote();
  }
}
