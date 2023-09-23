import { Injectable } from '@nestjs/common';
//
import animeParser from '../../../anime-parser/dist';
import { Anime } from '../../../anime-parser/src/lib/types';
import { InjectModel } from '@nestjs/mongoose';
import { AnimeModel } from './models/anime.model';
import { Model } from 'mongoose';
import { AnimeType } from './types/anime.types';

@Injectable()
export class AnimeService {
  constructor(@InjectModel(AnimeModel.name) private animeModel: Model<Anime>) {}

  async searchAnimeDto({ query, limit }): Promise<AnimeType<string>[]> {
    const data: Anime[] = await animeParser.search(query, limit);
    const responseData: AnimeType<string>[] = [];

    for (let item of data) {
      const anime = await this.animeModel.findOne({ url: item.url });
      const { title, originalName, url, source, image, year } = item;

      if (!anime) {
        const newAnime = new this.animeModel({
          ...item,
          player: {
            ...item,
            playerUrl: item.player,
          },
          details: { ...item },
        });
        const saved = await newAnime.save();

        responseData.push({
          id: saved.id,
          data: { title, originalName, url, source, image, year },
        });
      }
      responseData.push({
        id: anime.id,
        data: { title, originalName, url, source, image, year },
      });
    }

    return responseData;
  }
}
