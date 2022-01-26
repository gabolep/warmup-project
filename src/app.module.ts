import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose'
import { NewsModule } from './news/news.module';

@Module({
  imports: [NewsModule, MongooseModule.forRoot('mongodb+srv://Lep:gabo134679@warnupproject0.8127h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
