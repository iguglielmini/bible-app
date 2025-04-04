import { IsNotEmpty, IsEmail } from 'class-validator';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @IsNotEmpty({ message: 'O nome é obrigatório.' })
  name: string;

  @Column()
  @IsNotEmpty({ message: 'O Sobrenome é obrigatório.' })
  surname: string;

  @Column({ unique: true })
  @IsEmail({}, { message: 'O Sobrenome é obrigatório.' })
  email: string;

  @Column()
  @IsNotEmpty({ message: 'A senha é obrigatório.' })
  password: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;
}
