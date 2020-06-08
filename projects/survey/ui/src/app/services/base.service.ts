import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export abstract class BaseService {
  apiURL = environment.apiURL;

  /**
   * To get API URL
   * @returns {string}
   */
  protected getApiURL(): string {
    return this.apiURL;
  }
}
