import { Controller, Get, Post } from '@nestjs/common';
import { async } from 'rxjs/internal/scheduler/async';

@Controller('items')
export class ItemsController{
    @Get()
    async findAll(): Promise<string[]>{
        return ['Pizza', 'Coke'];
    }

    @Post()
    async create(){
        return 'Not yet implement';
    }
}