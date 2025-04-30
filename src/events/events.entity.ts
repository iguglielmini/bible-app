import{
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';


@Entity() 
export class Events {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({nullable: false})
  title: string

  @Column({nullable: false})
  description: string

  @Column('timestamp')
  date: Date;

  @Column()
  location: string

  @CreateDateColumn()
  creatAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}