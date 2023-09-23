import {
  Controller,
  Post,
  Get,
  Body,
  HttpCode,
  Param,
  Query,
} from '@nestjs/common';
import { AnimeService } from './anime.service';
import { SearchAnimeDto } from './dto/search.anime.dto';
import { GetAnimeDto } from './dto/get.anime.dto';
import { GetPlayerDto } from './dto/get.player.dto';
import { GetTopDto } from './dto/get.top.dto';
import {
  ApiSecurity,
  ApiTags,
  ApiResponse,
  ApiBadRequestResponse,
} from '@nestjs/swagger';

@ApiSecurity('basic')
@ApiTags('anime')
@Controller('api/anime')
export class AnimeController {
  constructor(private animeService: AnimeService) {}

  @ApiResponse({
    status: 201,
    description: 'Successfilly founded anime by name',
  })
  @ApiBadRequestResponse({
    status: 400,
    description: 'Failed search anime by name',
  })
  @HttpCode(200)
  @Post('search')
  searchAnime(@Body() body: SearchAnimeDto) {
    return this.animeService.searchAnimeDto(body);
  }

  @ApiResponse({ status: 200, description: 'Anime player' })
  @ApiBadRequestResponse({
    status: 400,
    description: 'Failed get anime player',
  })
  @Post('player')
  getPlayer(@Body() body: GetPlayerDto) {
    return this.animeService.getPlayer(body);
  }

  @ApiResponse({ status: 200, description: 'Anime details information' })
  @ApiBadRequestResponse({
    status: 400,
    description: 'Failed anime details information',
  })
  @Get('detail/:id')
  getAnime(@Param() param: GetAnimeDto) {
    return this.animeService.getAnime(param);
  }

  @ApiResponse({ status: 200, description: 'Top anime' })
  @ApiBadRequestResponse({
    status: 400,
    description: 'Failed get top anime',
  })
  @Get('top')
  getTop(@Query() query: GetTopDto) {
    return this.animeService.getTop(query);
  }
}
