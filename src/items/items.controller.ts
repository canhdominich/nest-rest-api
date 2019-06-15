import { Controller, Get, Post, HttpCode, Param } from '@nestjs/common';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) {}

    @Get('demo')
    findAll(): string {
        return this.itemsService.getHello();
    }

    @Get(':id')
    findOne(@Param('id') id : number):string{
        return this.itemsService.getOne(id);
    }
}