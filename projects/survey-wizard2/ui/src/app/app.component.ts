import { Component, OnInit } from '@angular/core';

import { SummaryService } from './services';
import { Summary } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Reverse Resources - Survey wizard';
  scrapPrices: Summary.ScrapPrice[] = [];

  constructor(private summaryService: SummaryService) {}

  ngOnInit() {
    this.summaryService
      .getScrapPrices()
      .subscribe((data: Summary.ScrapPrice[]) => {
        this.scrapPrices = data;
      });
  }
}
