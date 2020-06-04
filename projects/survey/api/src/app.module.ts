import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmConfig } from './database';
import { ScrapPriceRepository } from './repositories';

@Module({
  imports: [
    TypeOrmConfig,
    TypeOrmModule.forFeature([ScrapPriceRepository]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
