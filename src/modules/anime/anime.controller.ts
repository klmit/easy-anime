import { Controller, Post, Get, Body, HttpCode } from '@nestjs/common';
import { AnimeService } from './anime.service';
import { SearchAnimeDto } from './dto/search.anime.dto';

@Controller('anime')
export class AnimeController {
  constructor(private animeService: AnimeService) {}

  @HttpCode(200)
  @Post('search')
  searchAnime(@Body() body: SearchAnimeDto) {
    return this.animeService.searchAnimeDto(body);
  }
}
