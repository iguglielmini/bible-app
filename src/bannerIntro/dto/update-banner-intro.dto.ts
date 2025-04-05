import { PartialType } from '@nestjs/swagger';
import { CreateBannerIntroDto } from './create-banner-intro.dto';

export class UpdateBannerIntroDto extends PartialType(CreateBannerIntroDto) {}
