import { Injectable } from '@nestjs/common';
@Injectable()
export class ItemsService {
  getHello(): string {
    return 'Ok! Thread';
  }

  getOne(mes : number): string{
    return `This is ${mes}`;
  }
}