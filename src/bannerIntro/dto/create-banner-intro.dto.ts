import { IsNotEmpty, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBannerIntroDto {
  @ApiProperty()
  @IsNotEmpty()
  imagem: string;

  @ApiProperty()
  @IsDateString()
  validateDate: Date;

  @ApiProperty()
  @IsDateString()
  validFrom: Date;
}
