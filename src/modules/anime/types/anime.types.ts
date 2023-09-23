import { Anime } from '../../../../anime-parser/src/lib/types';

type ShortAnime = {
  title: string;
  originalName: string;
  year: string;
  image: string;
  source: string;
  url: string;
};

export type AnimeType<T> = {
  id: T;
  data: ShortAnime;
};

export type GetAnimeType = {
  message: string;
  data: Anime;
};

export type GetPlayerType = {
  message: string;
  data: {
    iframeUrl: string;
    playerUrl: string;
    translatesIds: [];
  };
};
