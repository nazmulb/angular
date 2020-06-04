import { Repository, EntityRepository } from 'typeorm';
import { ScrapPrice } from '../entities/scrap-price.entity';

@EntityRepository(ScrapPrice)
export class ScrapPriceRepository extends Repository<ScrapPrice> {}
