import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ScrapPrice } from './entities';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getGreetings(): string {
    return this.appService.getGreetings();
  }

  @Get('/prices')
  getScrapPrices(): Promise<ScrapPrice[]> {
    return this.appService.getScrapPrices();
  }
}
