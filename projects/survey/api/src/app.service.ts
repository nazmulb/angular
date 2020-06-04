import { Injectable } from '@nestjs/common';
import { ScrapPriceRepository } from './repositories';
import { ScrapPrice } from './entities';

@Injectable()
export class AppService {
  constructor(private readonly scrapPriceRepository: ScrapPriceRepository) {}

  getGreetings(): string {
    return 'Welcome to the RR Survey wizard API!';
  }

  async getScrapPrices(): Promise<ScrapPrice[]> {
    const prices: ScrapPrice[] = await this.scrapPriceRepository.find();
    return prices;
  }
}
