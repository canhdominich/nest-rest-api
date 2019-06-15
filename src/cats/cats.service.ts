import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cat } from './cat.entity';

@Injectable()
export class CatsService{
    constructor(@InjectRepository(Cat) private catsRepository : Repository<Cat>){

    }

    async getCat(id : number): Promise<Cat[]>{
        return await this.catsRepository.find({
            select : ['name', 'age', 'breed'],
            where : [{'id' : id}]
        });
    }

    async getAll(): Promise<Cat[]>{
        return await this.catsRepository.find({
            select : ['name', 'age', 'breed'],
        });
    }

    async createCat(cat : Cat){
        return await this.catsRepository.save(cat);
    }

    async updateCat(cat : Cat){
        return await this.catsRepository.save(cat);
    }

    async deleteCat(id : number){
        return await this.catsRepository.delete(id);
    }
}
