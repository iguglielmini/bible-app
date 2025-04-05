import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, MoreThan, LessThanOrEqual } from 'typeorm';
import { BannerIntro } from './banner-intro.entity';
import { CreateBannerIntroDto } from './dto/create-banner-intro.dto';
import { UpdateBannerIntroDto } from './dto/update-banner-intro.dto';

@Injectable()
export class BannerIntroService {
  constructor(
    @InjectRepository(BannerIntro)
    private bannerRepo: Repository<BannerIntro>,
  ) {}

  create(dto: CreateBannerIntroDto) {
    const banner = this.bannerRepo.create(dto);
    return this.bannerRepo.save(banner);
  }

  findAll() {
    return this.bannerRepo.find();
  }

  findOne(id: string) {
    return this.bannerRepo.findOne({ where: { id } });
  }

  update(id: string, dto: UpdateBannerIntroDto) {
    return this.bannerRepo.update(id, dto);
  }

  remove(id: string) {
    return this.bannerRepo.delete(id);
  }

  async findAllActive(): Promise<BannerIntro[]> {
    const now = new Date();

    return this.bannerRepo.find({
      where: {
        validFrom: LessThanOrEqual(now),
        validateDate: MoreThan(now),
      },
      order: {
        validateDate: 'ASC',
      },
    });
  }
}
