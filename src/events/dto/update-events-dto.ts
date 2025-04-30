import { PartialType } from '@nestjs/swagger';
import { CreateEventsDto } from './create-events-dto';

export class UpdateEventsDto extends PartialType(CreateEventsDto) {}
