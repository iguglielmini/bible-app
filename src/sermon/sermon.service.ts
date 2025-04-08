import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Sermon } from './sermon.entity';
import { Repository } from 'typeorm';
import { CreateSermonDto } from './dto/create-sermon.dto';
import { UpdateSermonDto } from './dto/update-sermon.dto';

@Injectable()
export class SermonService {
  constructor(
    @InjectRepository(Sermon)
    private readonly sermonRepository: Repository<Sermon>,
  ) {}

  async findAll(): Promise<Sermon[]> {
    return this.sermonRepository.find({ order: { created_at: 'DESC' } });
  }

  async findOne(id: string): Promise<Sermon> {
    try {
      const sermon = await this.sermonRepository.findOne({ where: { id } });

      if (!sermon) throw new NotFoundException('Sermão não encontrado');

      return sermon;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      console.error(`Erro ao buscar sermão com id '${id}': `, error);

      throw new InternalServerErrorException('Erro ao buscar sermão');
    }
  }

  async create(dto: CreateSermonDto): Promise<Sermon> {
    try {
      const sermon = this.sermonRepository.create(dto);
      return await this.sermonRepository.save(sermon);
    } catch (error) {
      console.error(`Erro ao criar o sermão:`, { dto, error });

      throw new InternalServerErrorException('Erro ao criar o sermão');
    }
  }

  async update(id: string, dto: UpdateSermonDto): Promise<Sermon> {
    try {
      const sermon = await this.findOne(id);
      const updated = Object.assign(sermon, dto);
      return this.sermonRepository.save(updated);
    } catch (error) {
      console.error(`Erro ao atualizar o Sermão`, { dto, error });

      throw new InternalServerErrorException('Error ao criar o Sermão');
    }
  }

  async remove(id: string): Promise<void> {
    const sermon = await this.findOne(id);
    await this.sermonRepository.remove(sermon);
  }
}
