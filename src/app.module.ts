import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ItemsModule } from './items/items.module';
import { CatsModule } from './cats/cats.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ItemsModule,
    CatsModule,
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'my_project_nestjs',
      entities: ["src/**/**.entity{.ts, .js}"],
      synchronize: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }
