import { PartialType } from '@nestjs/swagger';
import { CreateSermonDto } from './create-sermon.dto';

export class UpdateSermonDto extends PartialType(CreateSermonDto) {}
