import { Module } from '@nestjs/common';
import { AnimeController } from './anime.controller';
import { AnimeService } from './anime.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AnimeModel, AnimeSchema } from './models/anime.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: AnimeModel.name, schema: AnimeSchema }]),
  ],
  controllers: [AnimeController],
  providers: [AnimeService],
})
export class AnimeModule {}
