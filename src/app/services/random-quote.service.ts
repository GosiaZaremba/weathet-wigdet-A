import { Injectable, signal } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subscription, map } from 'rxjs';
import { environment } from '../../../environment';
import { RandomQuoteResponse } from '../models/random-quotes.model';

@Injectable({
  providedIn: 'root',
})
export class RandomQuoteService {
  private apiURL = 'assets/data/quotes.json';

  private dailyQuote = signal<RandomQuoteResponse | null>(null);

  constructor(private http: HttpClient) {}

  fetchData(): Subscription {
    return this.http
      .get<RandomQuoteResponse[]>(this.apiURL)
      .pipe(map((response) => this.processData(response)))
      .subscribe();
  }

  processData(data: RandomQuoteResponse[]): void {
    const randomIndex = Math.floor(Math.random() * data.length);
    this.dailyQuote.set(data[randomIndex]);
  }

  getRandomQuote() {
    return this.dailyQuote();
  }
}
