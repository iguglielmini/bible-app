import{ Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Events } from './events.entity'
import { CreateEventsDto } from './dto/create-events-dto'
import { UpdateEventsDto } from './dto/update-events-dto'
import { Repository } from 'typeorm'

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Events)
    private eventRepository: Repository<Events>,
  ) {}

  create(createEventsDto: CreateEventsDto){
    const event = this.eventRepository.create(createEventsDto);
    return this.eventRepository.save(event)
  }

  findAll() {
    return this.eventRepository.find();
  }

  findOne(id: string) {
    return this.eventRepository.findOneBy({id})
  }

  update(id: string, updateEventsDto: UpdateEventsDto){
    return this.eventRepository.update(id, updateEventsDto);
  }

  remove(id:string){
    return this.eventRepository.delete(id);
  }
}







// import {
//   Injectable,
//   InternalServerErrorException,
//   NotFoundException,
// } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Events } from './events.entity';
// import { Repository } from 'typeorm';
// import { CreateEventsDto } from './dto/create-events-dto';
// import { UpdateEventsDto } from './dto/update-events-dto';

// @Injectable()
// export class EventsService {
// constructor(
//   @InjectRepository(Events)
//   private eventRepository: Repository<Events>,
// ) {}

// create(createEventsDto: CreateEventsDto) {
//   const event = this.eventRepository.create(createEventsDto);
//   return this.eventRepository.save(event);
// }

// findAll() {
//   return this.eventRepository.find();
// }

// findOne(id: string){
//   return this.eventRepository.findOneBy({id});
// }

// update(id: string, UpdateEventsDto: UpdateEventsDto) {
//   return this.eventRepository.update(id, UpdateEventsDto);
// }

// remove(id: string){
//   return this.eventRepository.delete(id);
// }
// }