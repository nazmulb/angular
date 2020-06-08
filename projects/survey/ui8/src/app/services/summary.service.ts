import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from './base.service';
import { Summary } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class SummaryService extends BaseService {
  constructor(protected http: HttpClient) {
    super();
  }

  public getScrapPrices() {
    return this.http.get<Summary.ScrapPrice[]>(`${this.getApiURL()}/prices`);
  }
}
