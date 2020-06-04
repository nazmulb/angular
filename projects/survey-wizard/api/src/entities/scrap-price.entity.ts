import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ScrapPrice {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'float', default: 0 })
  price: number;
}
