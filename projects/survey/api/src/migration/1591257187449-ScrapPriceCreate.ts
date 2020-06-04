import { MigrationInterface, QueryRunner } from 'typeorm';

export class ScrapPriceCreate1591257187449 implements MigrationInterface {
  name = 'ScrapPriceCreate1591257187449';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `scrap_price` (`id` int NOT NULL AUTO_INCREMENT, `price` float NOT NULL DEFAULT 0, PRIMARY KEY (`id`)) ENGINE=InnoDB',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE `scrap_price`');
  }
}
