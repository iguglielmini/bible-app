import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BannerIntro } from './banner-intro.entity';
import { BannerIntroController } from './banner-intro.controller';
import { BannerIntroService } from './banner-intro.service';

@Module({
  imports: [TypeOrmModule.forFeature([BannerIntro])],
  controllers: [BannerIntroController],
  providers: [BannerIntroService],
})
export class BannerIntroModule {}
