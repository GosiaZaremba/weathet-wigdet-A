import { Component, inject } from '@angular/core';
import { RandomQuoteService } from '../../../services/random-quote.service';

@Component({
  selector: 'app-quote',
  standalone: true,
  imports: [],
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.scss',
})
export class QuoteComponent {
  randomQuoteService = inject(RandomQuoteService);
}
