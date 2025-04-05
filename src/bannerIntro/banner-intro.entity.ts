// src/banner-intro/banner-intro.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('banner_intro')
export class BannerIntro {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  imagem: string;

  @Column({ type: 'timestamptz' })
  validateDate: Date;

  @Column({ type: 'timestamptz' })
  validFrom: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
