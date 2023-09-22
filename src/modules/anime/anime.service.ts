import { Injectable } from '@nestjs/common';
//
import animeParser from '../../../anime-parser/dist';

@Injectable()
export class AnimeService {
  async searchAnimeDto({ query, limit }) {
    return await animeParser.search(query, limit);
  }
}
