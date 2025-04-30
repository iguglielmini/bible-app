import { IsEnum, IsInt, IsOptional, IsString, Max, Min, Length, isEnum, isInt } from 'class-validator'
import { Testament } from '../entities/bible-book.entity'

export class UpadateBibleBookDto {
  @IsString()
  @Length(1, 100)
  name?: string;

  @IsString()
  @IsOptional()
  @Length(1, 5)
  abbreviation?: string;

  @IsEnum(Testament)
  testament?: Testament;

  @IsInt()
  @IsOptional()
  @Min(1)
  @Max(150)
  chapters?: number
}
