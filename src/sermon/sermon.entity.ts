import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('sermons')
export class Sermon {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  titulo: string;

  @Column()
  subtitulo: string;

  @Column('text')
  paragrafo: string;

  @Column({ type: 'timestamp' })
  dataSermon: Date;

  @Column()
  bannerIntro: string;

  @Column({ default: false })
  favorito: boolean;

  @Column({ nullable: true })
  downloadUrl: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
