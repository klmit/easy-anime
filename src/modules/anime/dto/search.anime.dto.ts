import { IsNotEmpty } from 'class-validator';

export class SearchAnimeDto {
  @IsNotEmpty()
  query: string;

  limit: number;
}
