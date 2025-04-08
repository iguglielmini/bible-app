import { Module } from '@nestjs/common';
import { SermonService } from './sermon.service';
import { SermonController } from './sermon.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sermon } from './sermon.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sermon])],
  providers: [SermonService],
  controllers: [SermonController],
})
export class SermonModule {}
