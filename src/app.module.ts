import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonModule } from './person/person.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Abeen@123',
      database: 'testing',
      entities: [],
      autoLoadEntities:true,
      synchronize: true,
    }),
    PersonModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
