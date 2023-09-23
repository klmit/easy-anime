import { Injectable } from '@nestjs/common';
//
import animeParser from '../../../anime-parser/dist';
import { Anime } from '../../../anime-parser/src/lib/types';
import { InjectModel } from '@nestjs/mongoose';
import { AnimeModel } from './models/anime.model';
import { Model } from 'mongoose';
import { AnimeType, GetAnimeType, GetPlayerType } from './types/anime.types';

@Injectable()
export class AnimeService {
  constructor(@InjectModel(AnimeModel.name) private animeModel: Model<Anime>) {}

  async searchAnimeDto({ query, limit }): Promise<AnimeType<string>[]> {
    const data: Anime[] = await animeParser.search(query, parseInt(limit));
    const responseData: AnimeType<string>[] = [];

    for (let item of data) {
      const anime = await this.animeModel.findOne({ url: item.url });
      const { title, originalName, url, source, image, year } = item;

      if (anime) {
        responseData.push({
          id: anime.id,
          data: { title, originalName, url, source, image, year },
        });
        continue;
      }
      const newAnime = new this.animeModel({
        ...item,
        player: {
          ...item,
        },
        details: { ...item, rating: parseFloat(item.rating) || item.rating },
      });
      const saved = await newAnime.save();

      responseData.push({
        id: saved.id,
        data: { title, originalName, url, source, image, year },
      });
    }

    return responseData;
  }

  async getAnime({ id }): Promise<GetAnimeType> {
    const anime = await this.animeModel.findOne({ _id: id });

    anime.player = null;

    return { message: 'OK', data: anime };
  }

  async getPlayer({ id }): Promise<any> {
    const { player } = await this.animeModel.findOne({ _id: id });

    return { message: 'OK', data: player };
  }

  async getTop({ limit }): Promise<any> {
    const data: any = await this.animeModel
      .find()
      .sort({ 'details.rating': -1 })
      .limit(parseInt(limit || 50));

    data.forEach((item) => {
      item.player = null;
    });

    return { message: 'OK', data };
  }
}
