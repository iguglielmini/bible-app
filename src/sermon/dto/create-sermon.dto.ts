import {
  IsBoolean,
  IsDateString,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSermonDto {
  @ApiProperty()
  @IsString()
  titulo: string;

  @ApiProperty()
  @IsString()
  subtitulo: string;

  @ApiProperty()
  @IsString()
  paragrafo: string;

  @ApiProperty()
  @IsDateString()
  dataSermon: Date;

  @ApiProperty()
  @IsUrl()
  bannerIntro: string;

  @ApiProperty()
  @IsOptional()
  @IsUrl()
  downloadUrl: string;

  @ApiProperty()
  @IsBoolean()
  favorito: boolean;
}
