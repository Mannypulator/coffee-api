import { Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;
}
