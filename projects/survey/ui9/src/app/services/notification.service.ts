import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  showSuccess(message: string): void {
    console.log(message);
  }

  showError(message: string): void {
    console.error(message);
  }
}
