import { IsEnum, IsInt, IsString, Max, Min, Length } from 'class-validator';
import { Testament } from '../entities/bible-book.entity';

export class CreateBibleBookDto {
  @IsString()
  @Length(1, 100)
  name: string;

  @IsString()
  @Length(1, 5)
  abbreviation: string;

  @IsEnum(Testament)
  testament: Testament;

  @IsInt()
  @Min(1)
  @Max(150) //Considerando que Salmos é o maior e tem 150 capítulos
  chapters: number;
}
