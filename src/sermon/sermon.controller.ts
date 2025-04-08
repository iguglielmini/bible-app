import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { SermonService } from './sermon.service';
import { CreateSermonDto } from './dto/create-sermon.dto';
import { UpdateSermonDto } from './dto/update-sermon.dto';

@Controller('sermon')
export class SermonController {
  constructor(private readonly sermonService: SermonService) {}

  @Get()
  findAll() {
    return this.sermonService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sermonService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateSermonDto) {
    return this.sermonService.create(dto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateSermonDto) {
    return this.sermonService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sermonService.remove(id);
  }
}
