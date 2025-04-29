import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventsDto } from './dto/create-events-dto';
import { UpdateEventsDto } from './dto/update-events-dto';

@Controller('events')
export class EventsController {
    constructor(private readonly eventsService: EventsService) {}

    @Post()
    create(@Body() dto: CreateEventsDto){
        return this.eventsService.create(dto);
    }

    @Get()
    findAll() {
        return this.eventsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id:string) {
        return this.eventsService.findOne(id);
    }

    @Patch(":id")
    update(@Param('id') id:string, @Body() dto: UpdateEventsDto) {
        return this.eventsService.update(id, dto);
    }

    @Delete(':id')
    remove(@Param('id') id:string) {
        return this.eventsService.remove(id);
    }
}



