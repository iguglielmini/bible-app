import {
  Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn

} from "typeorm";

export enum Testament { // Usado para evitar que seja salvo em um bd errado
  OLD = 'Old',
  NEW = 'New',
}

@Entity('bible_books')

export class BibleBook {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'varchar', length: 5 })
  abbreviation: string

  @Column({ type: 'enum', enum: Testament })
  testament: Testament;

  @Column({ type: 'int' })
  chapters: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;



}
