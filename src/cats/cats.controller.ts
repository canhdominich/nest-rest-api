import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './cat.entity';
import { async } from 'rxjs/internal/scheduler/async';
import { asyncScheduler } from 'rxjs';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) { }

    @Get()
    async findAll() {
        try {
            let results = this.catsService.getAll();
            return results;
        } catch (error) {
            return error;
        }
    }

    @Get(':id')
    async findCat(@Param() params) {
        try {
            let results = this.catsService.getCat(params.id);
            return results;
        } catch (error) {
            return error;
        }
    }

    @Post()
    async createCat(@Body() cat: Cat) {
        try {
            let results = await this.catsService.createCat(cat);
            return results;
        } catch (error) {
            return error;
        }

    }

    @Put()
    async updateCat(@Body() cat: Cat) {
        try {
            let results = this.catsService.updateCat(cat);
            return results;
        } catch (error) {
            return error;
        }
    }

    @Delete(':id')
    deleteCat(@Param() params) {
        try {
            let flag = this.catsService.deleteCat(params.id);
            if(flag){
                return "Delete Successfully";
            }
            else{
                return "Failure";
            }
        } catch (error) {
            return error;
        }
    }
}