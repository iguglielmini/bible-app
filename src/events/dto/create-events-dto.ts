import { IsNotEmpty, IsDateString, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class CreateEventsDto{
    @ApiProperty()
    @IsString()
    title: string;

    @ApiProperty()
    @IsString()
    description: string;

    @ApiProperty()
    @IsDateString()
    date: string;

    @ApiProperty()
    @IsString()
    location: string;


}