import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { BannerIntroService } from './banner-intro.service';
import { CreateBannerIntroDto } from './dto/create-banner-intro.dto';
import { UpdateBannerIntroDto } from './dto/update-banner-intro.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('banner-intro')
export class BannerIntroController {
  constructor(private readonly service: BannerIntroService) {}

  @Get('active')
  getActiveBanner() {
    return this.service.findAllActive();
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() dto: CreateBannerIntroDto) {
    return this.service.create(dto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll() {
    return this.service.findAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateBannerIntroDto) {
    return this.service.update(id, dto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
